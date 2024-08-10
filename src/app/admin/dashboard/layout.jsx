import Sidebar from "@/components/sidebar/sidebar";

export default function layout({ children, table }) {
    return (
        <>
            <div className="flex flex-row-reverse justify-start items-center gap-[25px] w-screen h-screen p-[25px]">
                <Sidebar></Sidebar>
                <div className="flex flex-col items-end gap-[25px] w-[100%] h-[100%]">
                    {children}
                    {table}
                </div>
            </div>
        </>
    )
}
