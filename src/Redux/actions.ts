import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, ActionTypes } from "./actionTypes";

export const addTodo = (text: string): ActionTypes=>({
        type: ADD_TODO,
        payload: {text}

    }
)

export const toggleTodo = (id:number): ActionTypes=>({
    type: TOGGLE_TODO,
    payload: {id}

}
)

export const deleteTodo = (id:number): ActionTypes=>({
    type: DELETE_TODO,
    payload: {id}

}
)