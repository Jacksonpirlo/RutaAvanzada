type Action = {type: "ADD_TODO", payload: string} | {type: "REMOVE_TODO", payload: string} | {type: "TOGGLE_TODO", payload: string}
type State = {id: number, text: string}

const inicialState = {id: 0, name: ""}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, name: action.payload, id: state.id + 1}
            
        case "REMOVE_TODO":
            return inicialState;
        default:
            return state
            break;
    }
}