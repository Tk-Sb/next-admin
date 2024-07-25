import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"

export async function GET(){
    const data = await db.select().from(StudentsTable)

    return new Response(JSON.stringify(data), {  
        headers: { "Content-Type": "application/json" },
    });
}