import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function StudentProfile({ params }) {
    // fetching data for student, returns { firstName: Tk, lastName: Sb, notes: [] }
    const [studentData] = await db.select({
        firstName: StudentsTable.firstName,
        lastName: StudentsTable.lastName,
        notes: StudentsTable.notes
    }).from(StudentsTable).where(eq(StudentsTable.id, params.studentID))
    
    console.log(studentData)
    return(
        <>
            <h1>Profile for {params.studentID}</h1>
        </>
    )
}
