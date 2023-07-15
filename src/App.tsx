import React, { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import Search from './Search';
import { Provider } from 'react-redux';
import store from './Redux/store';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC  = () => {



  return (
    <Provider store={store}>
    <div className="App">
    <h1>To Do List</h1>
    {/* <Search/> */}
    <ToDoForm />
    <ToDoList />
    </div>
    </Provider>
  );
}

export default App;
