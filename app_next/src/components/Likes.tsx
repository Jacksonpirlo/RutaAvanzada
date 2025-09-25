import { useReducer } from "react";
import { imgAndIcon } from "@/helpers/utils";
import Image from "next/image";

type Action = {type: "LIKE"}  | {type: "DESLIKE"}
type State = {like: number, deslike: number}

const manageImgs = imgAndIcon();
const reducer = (state: State, action: Action) => {
        switch (action.type) {
            case "LIKE":
                return { ...state, like: state.like + 1 }
                
            case "DESLIKE":
                return {...state, deslike: state.deslike + 1 }
                
            default:
                return state
                
        }
    }
const Likes = () => {
const [state, dispatch] = useReducer(reducer, {like: 0, deslike:0})
    return(
        <>
        <article className="flex flex-col justify-center w-[320px] m-3.5 bg-amber-500 rounded-2xl p-2.5">
            <Image src={manageImgs.img1} alt="img1" />
            
            
            <div className="flex flex-col">
            <div className="flex items-center">
                <button className="bg-green-500 text-black p-1.5 rounded-2xl m-1.5" onClick={() => dispatch({type: "LIKE"})}>Like</button>
                <p className="text-black">{state.like}</p>
            </div>
            <div className="flex items-center">
                <button className="bg-green-500 text-black p-1.5 rounded-2xl m-1.5" onClick={() => dispatch({type: "DESLIKE"})}>Deslike</button>
                <p className="text-black">{state.deslike}</p>
            </div>
            </div>
        </article>
        </>
    )
}

export default Likes;