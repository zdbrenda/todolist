import React from 'react';
import styles from 'App/App.scss';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import Header from './Header';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state={
			error:null,
			list:[]
		};
	} //end of contructor	

	handleAddTodo=(todo)=>{
		console.log("I am running!");
		if(!todo){
			return "Enter valid todo!";
		}
		else if (this.state.list.indexOf(todo)>-1){
			return "This todo already exists.";
		}

		this.setState((pState)=>({
			list:pState.list.concat(todo)

		}));
	}




	render() {
		console.log(this.state.list);
		return (
			<div>
				<Header title="Brenda's Todo List App"></Header>
				<TodoList 
				list={this.state.list}
				/>
				<AddTodo handleAddTodo={this.handleAddTodo}/>
			</div>	
		);
	}
}

export default App;