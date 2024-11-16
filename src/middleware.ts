import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const  isPublicPath =
    path == "/login" ||
    path == "/aboutus" ||
    path == "/contactus" ||
    path == "/signup" ||
    path == "/services" ||
    path =="/home"  
}