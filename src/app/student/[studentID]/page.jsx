import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function StudentProfile({ params }) {
    const [student] = await db.select().from(StudentsTable).where(eq(StudentsTable.id, params.studentID))
    
    console.log(student)
    return(
        <>
            <h1>Profile for test PP{params.studentID}</h1>
        </>
    )
}
