import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import { cookies } from "next/headers"
import { decrypt } from "../_lib/session"

export default async function StudentProfile() {
    // get the cookie stored in the client browser
    const cookie = cookies()
    const session = cookie.get("session") // returns the encrypted JWT value
    const decrypted = await decrypt(session.value) // returns an object with the decrypted JWT value

    // fetching data for student using his cookie, returns { firstName: Tk, lastName: Sb, notes: [] }
    const [studentData] = await db.select({
        firstName: StudentsTable.firstName,
        lastName: StudentsTable.lastName,
        notes: StudentsTable.notes
    }).from(StudentsTable).where(eq(StudentsTable.id, decrypted.studentId))
    
    return(
        <>
            <h1>Profile for {studentData.firstName} {studentData.firstName}</h1>
            <h1>{studentData.notes}</h1>
        </>
    )
}
