import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"

export async function GET(request){
    const apiKey = process.env.FETCH_API_KEY
    const reqApiKey = request.headers.get('x-api-key')
    if(apiKey === reqApiKey){
        const data = await db.select().from(StudentsTable)
        return new Response(JSON.stringify(data), {  
            headers: { "Content-Type": "application/json" },
        })
    }
    else{
        return new Response(JSON.stringify({message: "failed"}))
    }
}