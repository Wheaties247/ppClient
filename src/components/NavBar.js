import React from "react"
import { Link } from "gatsby"
import styles from "../styles/navBar.module.css"
const {container, identifiyer, viewModels} = styles
class NavBar extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
      error:""
    }
    this.showViewModelNav = this.showViewModelNav.bind(this)
  }
  showViewModelNav(){
    return(
      <p className ={viewModels}
             onClick = {this.props.handleModelNavigation}
          >
          View Models
          </p>
      )
  }
  render(){
  	
    console.log("props", this.props)
    const {tokens, user_name, picture_url} = this.props.userInfo
  	return(
  		<div className={container}>
          {this.props.currentRoute=== "viewModels"?
          null: this.showViewModelNav()
        }
        <div className={identifiyer}>
          <p>Tokens: {tokens}</p>
          {this.props.userInfo.picture_url? 
            <img src={picture_url} alt="profile picture" />: null}
          
          <p>{user_name}</p>
        </div>
        
  		</div>
  		)
  }
}
export default NavBar