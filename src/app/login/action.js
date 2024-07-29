'use server'

import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { z } from "zod"
import { CreateSession } from "../_lib/session"
import { eq } from "drizzle-orm"

export async function UserLogin(prevState, formData){
    // form data schema
    const schema = z.object({
        username: z.string(),
        password: z.string()
    })
    const data = schema.parse({
        username: formData.get('username'),
        password: formData.get('password')
    })

    // searching for the student in the database using the entered username
    const [student] = await db.select({
        id: StudentsTable.id,
        username: StudentsTable.username,
        password: StudentsTable.password
    }).from(StudentsTable).where(eq(StudentsTable.username, data.username))
    
    if(!student){
        // username not found
        return {message: "Wrong username"}
    }
    else if(student){
        // username found
        const correctPassword = data.password === student.password ? true : false
        if(correctPassword){
            // succeed with login
            await CreateSession(student.id)
            
            return {message: "All good"}
        }
        else if(!correctPassword){
            // incorrect password
            return {message: "Wrong password"}
        }
    }
}