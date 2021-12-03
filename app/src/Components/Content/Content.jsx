import React from "react";
import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import './Content.css';
import { useState } from "react";
import {v4 as uuid } from "uuid";

 
const Content =()=>{
    const [todos, setTodos] = useState([]);

    const todoHandler = (value) =>{
        if(value.length > 0){

            const item = {
                id: uuid(),
                value: value,
                checked: false,
            }
            setTodos([...todos,item])
        }
    }
    return(
        <>
        <div className='content'>Content</div>
        <Input todoHandler={todoHandler}/>
        {console.log(todos)}
        <TodoList data={todos}/>
        </>   
    )
};
 export default Content;