import { NextResponse, type NextRequest } from "next/server"
import { UpdateSession } from "./app/_lib/session"

export async function middleware(request: NextRequest){
    return await UpdateSession(request)
}
export const config = {  
    matcher: [  
        // All routes except for '/login' '/home'
        '/((?!api|_next/static|_next/image|login|home).*)',  
    ],
}