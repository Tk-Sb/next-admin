import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const secretKey = new TextEncoder().encode(process.env.JWT_SECRET_KEY)

export async function encrypt(payload){
    return await new SignJWT(payload)
    .setProtectedHeader({alg: 'HS256'})
    .setIssuedAt()
    .setExpirationTime('10 sec from now')
    .sign(secretKey)
}
export async function decrypt(input){
    try{
        const { payload } = await jwtVerify(input, secretKey, {
            algorithms: ['HS256']
        })
        return payload
    }
    catch(error){
        return null
    }
}

export async function CreateSession(studentId){
    const expires = new Date(Date.now() + 10 * 1000)
    const session = await encrypt({ studentId, expires })

    cookies().set("session", session, { expires, httpOnly: true })
    redirect(`/student/${studentId}`)

}

export async function VerifySession(){
    
}
export async function DeleteSession(){
    
}