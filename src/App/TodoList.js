import React from 'react';
import Todo from './Todo';

const TodoList=(props)=>{
    return(
    
    <div>
        {props.list.length===0 &&<p>The todo list is empty. Please add a todo to start!</p>}
        {props.list.map((todo)=>(
            <Todo className="todo"
            key={todo}
            todoText={todo}></Todo>
        ))}
    </div>
    );
};

export default TodoList;
