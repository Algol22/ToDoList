import React, { useState } from 'react'
import ToDoItem from './ToDoItem';
import { connect } from 'react-redux';
import {AppState} from './Redux/reducer';

interface ToDoItemProps{
  todos: Todo[];
}

const ToDoList: React.FC<ToDoItemProps> = ({todos}) => {


  return (
    <div>ToDoList:

        {
            todos.map(todo => (
            <ToDoItem
            key={todo.id}
            todo={todo}
            />
            ))
        }
    </div>
  )
}

const mapStateToProps = (state: AppState) =>({
  todos: state.todos,
})

export default connect(mapStateToProps) (ToDoList)

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}