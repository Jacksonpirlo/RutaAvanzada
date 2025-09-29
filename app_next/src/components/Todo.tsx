import { text } from "stream/consumers"
type todo = { id: number, text: string, completed: boolean }
type Action = {type: "ADD_TODO", payload: string} | {type: "REMOVE_TODO", payload: string} | {type: "TOGGLE_TODO", payload: string}
type State = { todos: todo[]}

const inicialState: State = {todos: []};

const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, name: action.payload, id: state.id + 1, text: action.payload, complete: action.payload}
            
        case "REMOVE_TODO":
            return {...state, inicialState: state.todos.map((item) => item.)};
        default:
            return state
            break;
    }
}