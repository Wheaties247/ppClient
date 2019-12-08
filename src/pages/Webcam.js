import React from "react"
import { Link } from "gatsby"
// import WebCamPage from "../components/WebCamPage"
	// <WebCamPage />
import styles from "../styles/webcam_2.module.css"
const {container} = styles
class Webcam extends React.Component{
	constructor(props) {
	    super(props);
	    this.state = {}
	}
	render(){
		return(
			<div className={container}>
				<h1>Webcam</h1>
			</div>
			)
	}
	
  }

export default Webcam
