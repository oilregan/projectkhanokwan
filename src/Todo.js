import React, { Component } from 'react';
import './bulma.css';

		
export  class Todo extends Component {
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
			checkbox.push(<center><div className="column notification is-primary has-text-centered">
						<div className="notification is-success">{i}</div>
					</div></center>);
		
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

