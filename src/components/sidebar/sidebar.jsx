import ButtonGroup from "../buttons/button-group"

import Image from "next/image"
import logo from "@/components/sidebar/logo.svg"

export default function Sidebar() {
    
    return (
        <>
            <div className="flex items-center justify-center rounded-[15px] w-[300px] h-[100%] bg-[#D5DCE0] p-[5px]">
                <div className="flex flex-col items-center gap-[15px] rounded-[10px] w-[290px] h-[100%] bg-[#F0F3F4]">
                    <div className="w-[250px] h-[100px] flex justify-end border-b-2 border-[#B4B6B7] mb-[10px]">
                        <Image src={logo} width={100} height={100} alt="Logo"></Image>
                    </div>
                    <ButtonGroup></ButtonGroup>
                </div>
            </div>
            
        </>
    )
}
