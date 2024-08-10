'use client'

import Link from "next/link"
import { useState } from "react"

export default function ButtonGroup() {
    const [active, setActive] = useState(0)
    
    const buttons = [
        "control",
        "students",
        "settings"
    ]

    const handleClick = (i) => {
        setActive(i)
    }

    return (
        <>
            {buttons.map((btn, i) => (
                <Link key={i} href={`/admin/dashboard/${btn}`} onClick={() => handleClick(i)} className={`w-[250px] h-[50px] flex items-center justify-end px-[20px] gap-[20px] text-[#363E4D] rounded-[25px] text-[24px] ${active === i ? "bg-[#081225] text-[#FAFBFA]" : "bg-[#08122500] hover:bg-[#08122520]"}`}>
                    {i === 0 &&
                        "مركز التحكم"
                    }
                    {i === 1 &&
                        "الطلاب"
                    }
                    {i === 2 &&
                        "الإعدادات"
                    }
                    <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_61_155)">
                            <path d="M19.9375 5.9375C19.9375 2.93441 17.5031 0.5 14.5 0.5C11.4969 0.5 9.0625 2.93441 9.0625 5.9375C9.0625 8.94059 11.4969 11.375 14.5 11.375C17.5031 11.375 19.9375 8.94059 19.9375 5.9375ZM13.2307 14.1561C9.8702 12.0989 4.42703 11.5336 1.68789 11.3778C0.76748 11.3257 0 12.0269 0 12.9122V25.5318C0 26.3434 0.656465 27.0203 1.50041 27.0639C3.97334 27.1936 8.97641 27.6688 12.4343 29.4105C12.965 29.6779 13.5943 29.3137 13.5943 28.7382V14.8052C13.5938 14.5406 13.4629 14.2982 13.2307 14.1561ZM27.3121 11.3778C24.5735 11.533 19.1298 12.0989 15.7699 14.1561C15.5377 14.2982 15.4068 14.5503 15.4068 14.8148V28.7365C15.4068 29.3137 16.0378 29.6784 16.5702 29.4105C20.0276 27.6705 25.0278 27.1953 27.5002 27.0656C28.3441 27.0214 29.0006 26.3445 29.0006 25.5329V12.9122C29 12.0269 28.2325 11.3257 27.3121 11.3778Z" fill={` ${active === i ? "#FAFBFA" : "#363E4D"} `}/>
                        </g>
                        <defs>
                            <clipPath id="clip0_61_155">
                                <rect width="29" height="29" fill="white" transform="translate(0 0.5)"/>
                            </clipPath>
                        </defs>
                    </svg>
                </Link>
            ))}
        </>
    )
}
