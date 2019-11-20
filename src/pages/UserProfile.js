import React from "react"
import styles from "../styles/userProfile.module.css"
import NavBar from "../components/NavBar"
import EditAttribute from "../components/EditAttribute"

class UserProfile extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
      editUser_name:false

    }
    this.toggleEditUsername = this.toggleEditUsername.bind(this)

  }
    toggleEditUsername(){
    this.setState(prevState=>{
      prevState.editUser_name = !prevState.editUser_name 
      return prevState
    })
  }
  render(){
    console.log("navBar this.props.location.state", this.props.location.state)
    const {
        user_name,
        email,  
        tokens
          } = this.props.location.state
    const {container, editBox, button} = styles

  	return(
  		<div className={container}>
        <NavBar
        userInfo ={this.props.location.state}
        />
       <div className={editBox}>
        {this.state.editUser_name? <EditAttribute
                  type = "userName" 
                  property = "user_name"
                  propertyVal={user_name}
              />:<h2>User Name: {user_name}</h2>}
         <h2 
         className = {button}
         onClick ={()=>this.toggleEditUsername()}>
           Edit User Name
         </h2>
      </div>
        {/* BREAK*/}
  		</div>
  		)
  }
}
export default UserProfile