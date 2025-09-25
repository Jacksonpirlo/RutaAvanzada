import { useReducer } from "react";

type Action = {type: "SET_NAME", payload: string;} | {type: "SET_EMAIL", payload: string;} | {type: "SET_RESET"}
type State = {name: string; email: string;}
const inicialState = {name: "", email: ""}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "SET_NAME":
            return {...state, name: action.payload};
        case "SET_EMAIL":
            return {...state, email: action.payload};
        case "SET_RESET":
            return inicialState; 
    
        default:
            return state;
    }
}

const Form = () => {
    const [state, dispatch] = useReducer(reducer, inicialState);
    return(
        <>
        <section>
            <article>
            <label htmlFor="">Name</label>
            <input type="text" name="" value={state.name} id="" onChange={(e) => {dispatch({type: "SET_NAME", payload: e.target.value})}} />

            <label htmlFor="">Email</label>
            <input type="text" name="" value={state.email} id="" onChange={(e) => {dispatch({type: "SET_EMAIL", payload: e.target.value})}} />

            <input type="button" value="Reset" onClick={() => dispatch({type: "SET_RESET"})} />
        </article>

        <p>{state.name}</p>
        <p>{state.email}</p>
        </section>
        </>
    )
}

export default Form;