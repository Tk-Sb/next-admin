import Sidebar from "@/components/sidebar/sidebar";


export default function layout({ children }) {
    return (
        <>
            <div className="flex justify-end items-center w-screen h-screen p-[25px]">
                <Sidebar>
                    
                </Sidebar>
            </div>
        </>
    )
}
