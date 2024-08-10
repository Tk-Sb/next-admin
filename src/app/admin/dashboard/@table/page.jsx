import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import Table from "./table"
import { revalidatePath } from "next/cache"

export default async function TablePage() {
    revalidatePath("/admin/dashboard")
    
    const students = await db.select({
        studentId: StudentsTable.studentId,
        firstName: StudentsTable.firstName,
        lastName: StudentsTable.lastName,
        notes: StudentsTable.notes,
        username: StudentsTable.username,
        password: StudentsTable.password,
        classId: StudentsTable.classId,
        gradeId: StudentsTable.gradeId,
    }).from(StudentsTable)
    
    return (
        <>
            <Table students={students}></Table>
        </>
    )
}
