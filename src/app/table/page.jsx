import { db } from "@/db/db"
import { StudentsTable } from "@/db/schema"
import { eq } from "drizzle-orm"

export default async function page() {

    const data = await db.select().from(StudentsTable)
    console.log(data)
    return (
        <>

<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    iD
                </th>
                <th scope="col" className="px-6 py-3">
                    First Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Notes
                </th>
                <th scope="col" className="px-6 py-3">
                    Username
                </th>
                <th scope="col" className="px-6 py-3">
                    Password
                </th>
            </tr>
        </thead>
        <tbody>
            {data.map((data) => (
                <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {data.id}
                    </th>
                    <td className="px-6 py-4">
                        {data.firstName}
                    </td>
                    <td className="px-6 py-4">
                        {data.lastName}
                    </td>
                    <td className="px-6 py-4">
                        {data.notes}
                    </td>
                    <td className="px-6 py-4">
                        {data.username}
                    </td>
                    <td className="px-6 py-4">
                        {data.password}
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

    </>
  )
}
