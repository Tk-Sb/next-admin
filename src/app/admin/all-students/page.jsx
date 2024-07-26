import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"


export default async function AllStudents() {
    const allStudents = await db.select().from(StudentsTable)
    
    return(
        <>
            <h1>All students</h1>
            {allStudents.map((student) => (
                <h1 key={student.id}>{student.id} . {student.firstName} {student.lastName}</h1>
            ))}
        </>
    )
}
