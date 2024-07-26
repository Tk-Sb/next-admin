import Link from "next/link"

export default function Home() {
  
  return (
    <>
      <h1>Home page</h1>
      <Link href={"/login"}>
        <div className="bg-slate-500">Login</div>
      </Link>
    </>
  )
}
