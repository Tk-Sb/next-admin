'use client'

import { useEffect, useState } from "react"

export default function Table({ students }) {
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredStudents, setFilteredStudents] = useState(students)

    // the code inside the useEffect runs on mount + once every time the state "searchQuery" changes
    useEffect(() => {
        if(searchQuery !== "") {
            // filter the data based on the first-name
            setFilteredStudents(students.filter(item => item.firstName.includes(searchQuery)))
        }
        else{
            setFilteredStudents(students)
        }
    }, [searchQuery])
    
    return (
        <>
            <div className="flex items-center justify-end pr-[50px] w-[100%] h-[100px] bg-[#ffffff] rounded-[10px]">
                <div className="flex justify-between items-center w-[450px] h-[50px] bg-[#F0F3F4] rounded-[25px] text-[24px] px-[25px]">
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2917 23.4583C18.6304 23.4583 22.9583 19.1304 22.9583 13.7917C22.9583 8.45291 18.6304 4.125 13.2917 4.125C7.95291 4.125 3.625 8.45291 3.625 13.7917C3.625 19.1304 7.95291 23.4583 13.2917 23.4583Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M25.3749 25.875L20.1187 20.6188" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <input type="text" placeholder="بحث" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-[272px] h-[50px] bg-transparent focus:outline-none text-[18px] text-end" />  
                </div>
            </div>
            <div className="w-[100%] sm:rounded-[10px] overflow-x-auto">
                <table className="w-[100%] text-center rounded-[15px]">
                    <thead className="w-[100%] h-[100px] text-2xl text-[#FFFFFF] bg-[#081225]">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                الشعبة
                            </th>
                            <th scope="col" className="px-6 py-3">
                                الصف
                            </th>
                            <th scope="col" className="px-6 py-3">
                                اسم الأم
                            </th>
                            <th scope="col" className="px-6 py-3">
                                اسم الأب
                            </th>
                            <th scope="col" className="px-6 py-3">
                                الكنية
                            </th>
                            <th scope="col" className="px-6 py-3">
                                الاسم
                            </th>
                            <th scope="col" className="px-6 py-3">
                                الرقم
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student) => (
                            <tr key={student.studentId} className="h-[75px] odd:bg-[#D5DCE0] even:bg-[#F0F3F4] text-[#081225]">
                                <td scope="row" className="px-6 py-4">
                                    {student.classId}
                                </td>
                                <td className="px-6 py-4">
                                    {student.gradeId}
                                </td>
                                <td className="px-6 py-4">
                                    {student.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.lastName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.firstName}
                                </td>
                                <td className="px-6 py-4">
                                    {student.studentId}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}