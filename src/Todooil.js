import React, { Component } from 'react';
import './bulma.css';
import {Todo} from './Todo.js'
export  class Todooil extends Component {
	state={
		value:''
	}
	EventClick=(event)=>{
		this.setState({value:event.target.value});
	}
	render() 
	{	
		var checkbox = [];

		for (var i = this.state.value - 1; i >= 0; i--) {
			checkbox.push(<div className="column notification is-primary has-text-centered"><Todo/></div>);
		
	}

		return(

			<div>
				<span>
					<select onChange={this.EventClick} value={this.state.value}>
						<option>1</option>
						<option>2</option>
						<option>3</option>
						<option>4</option>
						<option>5</option>
					</select>
				</span>
				<h1>{this.state.value}</h1>
				<div >
				{checkbox}
				</div>
			</div>              
             


		);
	}             



}

