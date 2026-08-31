import { NextResponse } from "next/server";
import { sessionCookie } from "@/lib/session";

export async function POST(request: Request) {
  const response = NextResponse.redirect(new URL("/", request.url));
  response.cookies.set(sessionCookie, "", { httpOnly: true, expires: new Date(0), path: "/" });
  return response;
}
