import Link from "next/link"

export default function DashBoard() {
    return (
        <>
            <h1>Dashboard</h1>
            <Link href={"/admin/all-students"}>
                <div className="bg-slate-500">All students</div>
            </Link>
            <Link href={"/admin/add-student"}>
                <div className="bg-slate-400">Add student</div>
            </Link>
        </>
    )
}
