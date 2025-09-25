import { useReducer } from "react"

type Action = {type: "INCREMENT"} | {type: "DECREMENT"};
type State = {count: number}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            return state;
    }
}
const Contador = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
        <div>{state.count}</div>
        <button onClick={() => dispatch({type: "INCREMENT"})}>INCREMENT</button>
        <button onClick={() => dispatch({type: "DECREMENT"})}>DECREMENT</button>
        </>
    )
}

export default Contador;