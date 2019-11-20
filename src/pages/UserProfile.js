import React from "react"
import styles from "../styles/userProfile.module.css"
import NavBar from "../components/NavBar"
import EditAttribute from "../components/EditAttribute"

class UserProfile extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
      editUser_name:false,
      editPaypal:false,
      editEmail: false

    }
    this.toggleEditUsername = this.toggleEditUsername.bind(this)
    this.toggleEditPaypal = this.toggleEditPaypal.bind(this)
    this.toggleEditEmail = this.toggleEditEmail.bind(this)

  }
    componentDidMount(){
    const {
        id,
        user_name,
        email,  
        tokens, 
        paypal
          } = this.props.location.state
        this.setState({
        id,
        user_name,
        email,  
        tokens, 
        paypal
        })
  }
    toggleEditUsername(){
    this.setState(prevState=>{
      prevState.editUser_name = !prevState.editUser_name 
      return prevState
    })
  }
     toggleEditEmail(){
    this.setState(prevState=>{
      prevState.editEmail = !prevState.editEmail 
      return prevState
    })
  }
  toggleEditPaypal(){
    this.setState(prevState=>{
      prevState.editPaypal = !prevState.editPaypal 
      return prevState
    })
  }
  render(){
    console.log("navBar this.props.location.state", this.props.location.state)
    const {
        id,
        user_name,
        email,  
        tokens, 
        paypal  
          } = this.state
    const {container, editBox, button} = styles

  	return(
  		<div className={container}>
        <NavBar
        userInfo ={this.state}
        />
       <div className={editBox}>
        {this.state.editUser_name? <EditAttribute
                  id = {id}
                  endpoint = "users"
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
        <div  className={editBox}>
           {this.state.editEmail? <EditAttribute
                      id = {id}
                      endpoint = "users"
                      type = "email" 
                      property = "email"
                      propertyVal={email}
                  />:<h2>Email: {email}</h2>}
             <h2 
             className = {button}
             onClick ={()=>this.toggleEditEmail()}>
               Edit Email Address
             </h2>
        </div>
        {/* BREAK*/}
        <div className={editBox}>

           {this.state.editPaypal? <EditAttribute 
                    id = {id}
                    endpoint = "users"
                    type ="paypal"
                    property = "paypal"
                    propertyVal={paypal}
                /> :<h2>PayPal Account: {paypal}</h2>}
           <h2 
           className = {button}
           onClick ={()=>this.toggleEditPaypal()}>
             Edit Paypal Info
           </h2>
        </div>
  		</div>
  		)
  }
}
export default UserProfile