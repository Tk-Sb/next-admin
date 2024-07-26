'use server'

import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { revalidatePath } from "next/cache"
import { z } from "zod"

export async function CreateStudent(prevState, formData){
    // form data schema
    const schema = z.object({
        firstName: z.string(),
        lastName: z.string(),
        notes: z.array(),
        username: z.string(),
        password: z.string()
    })
    const data = schema.parse({
        firstName: formData.get("first-name"),
        lastName: formData.get("last-name"),
        notes: [],
        username: `${formData.get('first-name')} ${formData.get('last-name')}`,
        password: "password"
    })
    try{
        await db.insert(StudentsTable).values(data)
        revalidatePath("/all-students")
        console.log("added new student")
    }
    catch(error){
        console.error(error)
        return "failed"
    }
}