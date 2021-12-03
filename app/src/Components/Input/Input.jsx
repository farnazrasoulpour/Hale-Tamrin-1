import { useState } from 'react';
import './Input.css';

const Input =({todoHandler})=>{
    const [todo,setTodo]=useState("");
    return (
        <div>
            <input className='input'
             placeholder='todo...' 
             value={todo}
             onChange={(event)=>{setTodo(event.target.value)}}>
             </input>
            <button className='button'
            onClick={()=>todoHandler(todo)}>ADD</button>
        </div>
    )
};
export default Input;