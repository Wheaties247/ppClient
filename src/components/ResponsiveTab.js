import React from "react"
import { Link } from "gatsby"
import responsiveTabStyle from "../styles/responsiveTab.module.css"
const {container, 
	linkContainer,
	navContainer
	} = responsiveTabStyle
const NavTabs = () => {
	return(
		<div className ={navContainer}>
			<Links 
				linkName="The Playhouse"
				local= {true}
				linkPath="/UserLoginRegister"
			 />
			<Links
				linkName="Merch"
				local= {false}
				
			 />
			<Links
				linkName="Promos"
				local= {false}
				
			 />
		</div>
		)
}
const style ={
	color: "rgb(215, 39, 186)",
	textDecoration: "none"
}
const Links =(props)=>{
	const {linkName, linkPath, local} = props
	if(local){
		return(
		<Link 
		style={style}
		to={linkPath}>
			<div className ={linkContainer}>
				<h1>{linkName}</h1>
			</div>
		</Link>
		)
	}else{
		return(
		<a href={linkPath}>
			<div className ={linkContainer}>
				<h1>{linkName}</h1>
			</div>
		</a>
		)
	}
	
}
class ResponsiveTab extends React.Component{
	constructor(props) {
		super(props);
		this.state={
		}
	}

	render(){
		const {toggleNav} = this.state
		return(
			<div className = {container}>
		   		<NavTabs />
		   		
		  	</div>
			)
	}
  
}

export default ResponsiveTab
