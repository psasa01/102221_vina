import { NextResponse } from "next/server";
import { sessionCookie } from "@/lib/session";
export async function GET(request:Request){const r=NextResponse.redirect(new URL("/",request.url)); r.cookies.set(sessionCookie,"",{httpOnly:true,expires:new Date(0),path:"/"}); return r;}
export async function POST(request:Request){return GET(request);}
