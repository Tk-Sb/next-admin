import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import Link from "next/link"

export default async function AllStudents() {
    const allStudents = await db.select().from(StudentsTable)
    
    return (
        <>
            <h1>All students</h1>
            {allStudents.map((student) => (
                <Link href={`/all-students/${student.id}`} key={student.id}>
                    <h1 key={student.id}>{student.firstName} {student.lastName}</h1>
                </Link>
            ))}
        </>
    )
}
