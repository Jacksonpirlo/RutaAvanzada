import { StaticImageData } from "next/image";
import Image from "next/image";
import { JSX } from "react";

interface BagdeProps {
    label: string;
    Status:
    | {type: "success"} 
    | {type: "warning"} 
    | {type: "info"} 
    | {type: "error"} 
    | {type: "neutral"}
    icon: JSX.Element;
    title?: string
}

const Bagde = ({label, Status, icon, title}: BagdeProps) => {
    const statusBgList= {
        neutral: "bg-gray-600",
        info: "bg-blue-600",
        Secondary: "bg-purple-600",
        success: "bg-green-600",
        warning: "bg-yellow-600",
        error: "bg-red-600"
    }

    const statusBg = statusBgList[Status?.type] || ""

    return (<>
    
        <article className={`flex flex-col gap-1.5 m-3.5 text-[10px] ${statusBg} p-2.5 rounded-2xl text-amber-50`}>
            <div>
                <h1>Title:{title}</h1>
                <ul className="flex items-center gap-2">
                    <li className="flex gap-1.5 items-center">Label: {label} <span>{icon}</span></li>
                </ul>
            </div>
        </article>

    </>)
}

export default Bagde;