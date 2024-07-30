import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"
import { NextRequest } from "next/server"
import { decrypt } from "../_lib/session"

export default async function StudentProfile() {
    const cookie = cookies()
    const session = cookie.get("session")
    const decrypted = await decrypt(session.value)
    console.log(decrypted.studentId)
    // fetching data for student, returns { firstName: Tk, lastName: Sb, notes: [] }
    const [studentData] = await db.select({
        firstName: StudentsTable.firstName,
        lastName: StudentsTable.lastName,
        notes: StudentsTable.notes
    }).from(StudentsTable).where(eq(StudentsTable.id, decrypted.studentId))
    
    console.log(studentData)
    return(
        <>
            <h1>Profile for {studentData.firstName} {studentData.firstName}</h1>
            <h1>{studentData.notes}</h1>
        </>
    )
}
