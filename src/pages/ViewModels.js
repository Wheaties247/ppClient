import React from "react"
import styles from "../styles/viewModels.module.css"

const {container} = styles
class ViewModels extends React.Component{
	constructor(props) {
    super(props);

	}
	render(){
         
		console.log("ViewModels", this.props.location.state)
		return(
			<div className={container}>
				<h1>VeiwModels</h1>
			</div>
			)
	}
}

export default ViewModels