export const ADD_TODO= "ADD_TODO";
export const TOGGLE_TODO= "TOGGLE_TODO";
export const DELETE_TODO= "DELETE_TODO";

interface AddToDoAction{
    type: typeof ADD_TODO;
    payload:{
        text: string;
    }
}

interface ToggleToDoAction{
    type: typeof TOGGLE_TODO;
    payload:{
        id:number;
    }
}

interface DeleteToDoAction{
    type: typeof DELETE_TODO;
    payload:{
        id:number;
    }
}

export type ActionTypes = AddToDoAction | ToggleToDoAction | DeleteToDoAction;