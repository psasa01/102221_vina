import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { User } from "@/models/User";
import { hashLegacyPassword } from "@/lib/auth";
import crypto from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData();
  const ime = String(form.get("ime") || "").trim();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");
  const confirm = String(form.get("passwordConfirm") || "");
  if (!ime || !email || password.length < 8 || password !== confirm) return NextResponse.redirect(new URL("/register?error=invalid", request.url));
  await dbConnect();
  if (await User.exists({ email })) return NextResponse.redirect(new URL("/register?error=exists", request.url));
  const { hash, salt } = hashLegacyPassword(password);
  const user = await User.create({ ime, email, hash, salt, active: true, secretToken: crypto.randomBytes(20).toString("hex") });
  return NextResponse.redirect(new URL("/login?registered=1", request.url));
}
