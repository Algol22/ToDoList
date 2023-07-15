import { ActionTypes, ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "./actionTypes";
import {Todo} from "../ToDoList";
import { act } from "react-dom/test-utils";



const initialState: AppState = {
    todos: [],
};

const reducer = (state= initialState, action: ActionTypes): AppState =>{
    switch(action.type){
        case ADD_TODO:
            return {
                ...state,
                todos:[
                    ...state.todos,
                    {
                        id: Date.now(),
                        text: action.payload.text,
                        completed: false,
                    }
                ]
            };

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo)=>
                todo.id === action.payload.id?
                {...todo, completed: !todo.completed}
                : todo
                ),
            };

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload.id),
            };

        default:
            return state;

    }
};

export default reducer;
export type AppState = {
    todos: Todo[];
}

