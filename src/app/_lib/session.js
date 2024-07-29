import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

// secret key to sign unique JWT value
const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

// encrypt the "payload" value using "jose"
export async function encrypt(payload){
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('10 min from now')
    .sign(secretKey)
}
// decrypt the "input" value using "jose"
export async function decrypt(input){
    try{
        // "payload" is the added values to the JWT (studentId, role)
        const { payload } = await jwtVerify(input, secretKey, {
            algorithms: ['HS256']
        })
        return payload
    }
    catch(error){
        return null
    }
}
// create session after successful login
export async function CreateSession(studentId){
    // 10 min expiration starts from the creation time
    const expires = new Date(Date.now() + 60 * 1000 * 10)
    // the encrypted value of the JWT
    const session = await encrypt({ studentId, expires })

    // store the JWT as a cookie that is stored in the cookie jar of the client browser
    cookies().set(
        "session", // cookie name
        session, // cookie value
        { expires, httpOnly: true } // cookie options
    )
    // redirect the student to his dashboard using his ID
    redirect(`/student/${studentId}`)
}

export async function UpdateSession(request){
    const session = request.cookies.get("session")?.value
    
    if(!session){
        return NextResponse.redirect(new URL("/login", request.url))
    }
    else if(session){
        // update session so it doesn't expire
        const decrypted = await decrypt(session)
        decrypted.expires = new Date(Date.now() + 60 * 1000 * 10)

        const res = NextResponse.next()
        res.cookies.set({
            name: "session",
            value: await encrypt(decrypted),
            httpOnly: true,
            expires: decrypted.expires
        })
        return res
    }
}
export async function DeleteSession(){
    
}