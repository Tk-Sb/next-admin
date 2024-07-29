import { NextResponse, type NextRequest } from "next/server"

export async function middleware(request: NextRequest){

    console.log("middleware")
    return NextResponse.redirect(new URL("/login", request.url))
}
export const config = {  
    matcher: [  
        // All routes except for '/login' '/home'
        '/((?!api|_next/static|_next/image|login|home).*)',  
    ],
}