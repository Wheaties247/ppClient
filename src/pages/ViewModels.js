import React from "react"
import styles from "../styles/viewModels.module.css"
import NavBar from "../components/NavBar"
import TokenService from "../services/TokenService";
import axios from 'axios';

const {container} = styles
class ViewModels extends React.Component{
	constructor(props) {
    super(props);
    	this.state={}
	}
	componentDidMount(){
		const currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
       console.log("read currentUser", currentUser );
       axios('http://localhost:7770/models/all')
		.then(resp=>{
			console.log("All Models", resp)
		})
		.catch(err=>{
			console.log("there was an error in Get all Models", err)

		})
    const {
        id,
        user_name,
        email,  
        tokens, 
        paypal
          } = currentUser
        this.setState({
        id,
        user_name,
        email,  
        tokens, 
        paypal
        })

 	}
	render(){
         
		console.log("ViewModels", this.props.location.state)
		return(
			<div className={container}>
				<NavBar
					currentRoute = "viewModels"
			        handleModelNavigation ={null}
			        userInfo ={this.state}
		        />
				<h1>VeiwModels</h1>
			</div>
			)
	}
}

export default ViewModels