import React from 'react';

const Todo=(props)=>(
    <div><p className="ToDoItem-Text">{props.todoText}</p>
    <button className="ToDoItem-Delete">remove todo</button>
    </div>
)

export default Todo;