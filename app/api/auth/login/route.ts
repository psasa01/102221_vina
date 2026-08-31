import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import { User } from "@/models/User";
import { verifyLegacyPassword } from "@/lib/auth";
import { createSession, sessionCookie } from "@/lib/session";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  if (!email || !password) return NextResponse.redirect(new URL("/login?error=missing", request.url));
  await connectDB();
  const user = await User.findOne({ email }).lean() as any;
  if (!user || !user.hash || !user.salt || !verifyLegacyPassword(password, user.hash, user.salt)) {
    return NextResponse.redirect(new URL("/login?error=invalid", request.url));
  }
  if (user.active === false) return NextResponse.redirect(new URL("/login?error=inactive", request.url));
  const response = NextResponse.redirect(new URL("/mojaKolekcijaVina", request.url));
  response.cookies.set(sessionCookie, createSession(user._id.toString()), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
  await User.updateOne({ _id: user._id }, { $set: { zadnjiPutVidjen: new Date() } });
  return response;
}
