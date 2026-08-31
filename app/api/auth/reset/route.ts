import { NextResponse } from "next/server";
import { dbConnect } from "@/lib/mongodb";
import { User } from "@/models/User";
import crypto from "node:crypto";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const form = await request.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  await dbConnect();
  const token = crypto.randomBytes(24).toString("hex");
  await User.updateOne({ email }, { $set: { resetPasswordToken: token, resetPasswordExpire: new Date(Date.now() + 60 * 60 * 1000) } });
  return NextResponse.redirect(new URL("/reset?sent=1", request.url));
}
