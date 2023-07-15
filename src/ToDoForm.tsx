import React, { useState } from 'react'
import App from './App';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { connect } from 'react-redux';
import { addTodo } from './Redux/actions';


interface ToDoFormProps {
  onAdd:(text:string)=>void;
}


const ToDoForm: React.FC<ToDoFormProps> = ({onAdd}) => {
    const[text, setText] = useState<string>("");
    console.log(text);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        if(text.trim() !==""){
            onAdd(text);
            setText("");
        }
    }

  return (
    <form onSubmit={handleSubmit}>
<TextField id="standard-basic" label="Standard" variant="standard"
type="text"
value={text}
onChange={(e)=>setText(e.target.value)}
placeholder="enter a task"/>

<Button type="submit" variant="contained">Add</Button>


    </form>
  )
};

const mapDispatchToProps ={
  onAdd: addTodo,
}

export default connect(null, mapDispatchToProps)(ToDoForm)