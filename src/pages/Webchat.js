import React from "react"
import { Link } from "gatsby"
// import WebCamPage from "../components/WebCamPage"
	// <WebCamPage />
import styles from "../styles/webcam_2.module.css"
import axios from "axios";

const {container} = styles
class Webchat extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {}
	}
	componentDidMount(){
    	axios(`http://localhost:7770/webcams`, 
    	{body:"test"}
    	)
    	.then(resp=>{
    		console.log("Successful Webcam connection", resp)
    	})
    	.catch(err=>{
    		console.log("there was an error connecting the websockets")
    	})

 	}
	render(){
		return(
			<div className={container}>
				<h1>Webchat</h1>
			</div>
			)
	}
	
  }

export default Webchat
