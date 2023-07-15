import { Button } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import {Todo} from "./ToDoList";
import { deleteTodo, toggleTodo } from './Redux/actions';

interface ToDoItemProps{
todo: Todo;
onToggle: (id: number) => void;
onDelete: (id: number) => void;
}

const ToDoItem: React.FC<ToDoItemProps> = ({todo, onDelete, onToggle}) => {
  return (
    <div style={{textAlign:"left", marginBottom:"5px"}}>
        <input 
        type="checkbox"
        checked={todo.completed}
        onChange={()=>onToggle(todo.id)}
        />

<span 
style={{textDecoration: todo.completed? "line-through" : "none"}}>
{todo.text + " "}
</span>
<Button color="error" variant="contained" onClick={()=> onDelete(todo.id)}>Delete</Button>

    </div>
  )
}

const mapDispatchToProps = {
  onToggle: toggleTodo,
  onDelete: deleteTodo
}

export default connect(null, mapDispatchToProps)(ToDoItem);