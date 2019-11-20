import React from "react"
import IntroStyles from "../styles/IntroLanding.module.css"
const {
	container, 
	title, 
	subTitle, 
	fadeTitle, 
	fadeSubTitle
	} = IntroStyles
class IntroLanding extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			fadeTitle:true
		}
	}
	render(){
	return(
	
		<div className = {container}>
			<h1  className={fadeTitle}>
					The Pink Playhouse
			</h1>

			<h1 className={fadeSubTitle}>
				Come Play with Us
			</h1>	
		</div>
		)
	}
}
export default IntroLanding