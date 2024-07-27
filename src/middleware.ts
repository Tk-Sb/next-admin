import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"
import { decrypt } from "./app/_lib/session"

export async function middleware(request: NextRequest){
    const protectedRoutes = ["/student/1"]
    const currentPath = request.nextUrl.pathname
    const isProtected = protectedRoutes.includes(currentPath)

    if(isProtected){
        const cookie = cookies().get("session")?.value
        const session = await decrypt(cookie)
        
        if(!session?.studentId){
            return NextResponse.redirect(new URL("/login", request.nextUrl))
        }
        else{
            return NextResponse.next()
        }
    }
}