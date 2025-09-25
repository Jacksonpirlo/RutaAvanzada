import { StaticImageData } from "next/image";
import Image from "next/image"
interface ButtonProps {
    text: string;
    ClassNameBg?: string;
    Background: 
    | {type: "Default"}
    | {type: "Primary"}
    | {type: "Secondary"}
    | {type: "Success"}
    | {type: "Warning"}
    | {type: "Danger"}
    classsNameColor?: string;
    Disable?: boolean
    disableTheme?: string;
    loader: () => void;
    // leftFunction: () => void;
    // rigthFunction: () => void;

    leftIcon: string | StaticImageData
    rightIcon: string | StaticImageData
    left?: boolean;
    rigth?: boolean;
}

const Button = ({text, ClassNameBg, classsNameColor, Background, Disable, disableTheme, loader, leftIcon, rightIcon, left, rigth}: ButtonProps) => {
    const bgList = {
        Default: "bg-gray-800",
        Primary: "bg-blue-800",
        Secondary: "bg-purple-800",
        Success: "bg-green-800",
        Warning: "bg-yellow-700",
        Danger: "bg-red-700"
    }

    const bgListConditional = bgList[Background.type] || "";

    if(Disable) {disableTheme = "bg-gray-200 cursor-none"; classsNameColor = "text-gray-500"}
    else {disableTheme = ""}

    return(<>

        <button type="submit" onClick={() => {loader();}} disabled={Disable} className={`flex gap-1.5 ${bgListConditional} ${ClassNameBg} ${classsNameColor} ${disableTheme} p-2 rounded-2xl cursor-pointer`}> {left ? (<Image className="w-[20px] h-[20px]" src={leftIcon} alt=""/>) : ("")} {Disable ? "Cargando..." : text} {rigth ? (<Image className="w-[20px] h-[20px]" src={rightIcon} alt=""/>) : ("")}</button>

    </>)
}

export default Button;