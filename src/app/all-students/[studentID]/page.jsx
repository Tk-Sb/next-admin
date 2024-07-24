import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"
import Link from "next/link"

export default async function StudentPage({ params }) {
    // returns an array of objects [ { } ] but after the array destructuring it returns an object { }, returns undefined when id is not found
    const [search] = await db.select().from(StudentsTable).where(eq(StudentsTable.id, params.studentID))
    const searchResult = search ? search : "Not found" // { firstName, lastName, notes[] }
    
    return(
        <>
            <h1>Student: {searchResult.firstName} {searchResult.lastName}</h1>
            {searchResult.notes.length !== 0 && 
                <h1>Notes {searchResult.notes}</h1>
            }
            {searchResult.notes.length === 0 &&
                <h1>No notes yet</h1>
            }
            <Link href={`/all-students/${searchResult.id}/add-notes/${searchResult.id}`}><h3>Add notes</h3></Link>
        </>
    )
}
