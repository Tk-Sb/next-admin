import Link from "next/link"

export default function Home() {
  
  return (
    <>
      <h1>Home page</h1>
      <Link href={"/all-students"}>
        <div className="bg-slate-500">Students</div>
      </Link>
      <Link href={"/add-student"}>
        <div className="bg-slate-400">Add student</div>
      </Link>
    </>
  )
}
