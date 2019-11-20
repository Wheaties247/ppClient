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
    this.editRequestHandler = this.editRequestHandler.bind(this)
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
  editRequestHandler(info){
    console.log("editRequesthandler", info.resp)
    console.log("this.state", this.state)

    const {email, payment_info, tokens, user_id, user_name} = info.resp
    this.setState({email, payment_info, tokens, id:user_id, user_name}, ()=>console.log("after setState", this.state))
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
                  editRequestHandler={this.editRequestHandler}
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
                      editRequestHandler={this.editRequestHandler}
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
                    editRequestHandler={this.editRequestHandler}
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