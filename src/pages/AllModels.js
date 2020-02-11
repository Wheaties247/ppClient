import React, { Component } from 'react';
import axios from 'axios';

class AllModels extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		axios('http://localhost:7770/models/all')
		.then(resp=>{
			console.log("All Models", resp)
		})
		.catch(err=>{
			console.log("there was an error in Get all Models", err)

		})
	}
	render(){
		return(
			<div>
				<h1>All Models</h1>
			</div>
			)
	}
}
export default AllModels;