import React,{Component} from 'react';
import { thisExpression } from '@babel/types';

export default class AddTodo extends React.Component{

    state={error:undefined};

    handleAddTodo=(e)=>{

        e.preventDefault();
        
        const todo=e.target.elements.todo.value.trim();
        const error= this.props.handleAddTodo(todo);

        this.setState(()=>({error}));

        if(!error){
            e.target.elements.todo.value="";
        }
    }

    render(){
        return(<div className="ToDoInput">
            {this.state.error&&<p>{this.state.error}</p>}

            <form onSubmit={this.handleAddTodo}>
                <input type='text' name='todo'></input>
                <button className='todo_add_button'>Add Todo</button>
            </form>


        </div>)
    }
}