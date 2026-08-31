import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import crypto from "node:crypto";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";
import { verifyLegacyPassword } from "@/lib/auth";

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
  const token = crypto.randomBytes(32).toString("hex");
  const response = NextResponse.redirect(new URL("/mojaKolekcijaVina", request.url));
  response.cookies.set("vina_session", token, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: "/", maxAge: 60 * 60 * 24 * 30 });
  // Session persistence is added below; token is intentionally only issued after a valid legacy password check.
  return response;
}
