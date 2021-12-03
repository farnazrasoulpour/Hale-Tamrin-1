import './TodoList.css';
// import Todo from '../../Todo/Todo'
import Todo from './todo/Todo';


const TodoList =({data})=>{
    return (
        <div className='todolist' >
        {
         data.map((item) => 
            <div>{item.value}</div>
        ) }
        </div>
    )
};
export default TodoList;