import React from "react"
import styles from "../styles/userProfile.module.css"
import NavBar from "../components/NavBar"
import EditAttribute from "../components/EditAttribute"
import { navigate } from "gatsby"




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
    this.navToModels = this.navToModels.bind(this)
  }

    componentDidMount(){
       const currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
       console.log("read currentUser", currentUser );

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
  navToModels(){
    const {editUser_name,
      editPaypal,
      editEmail, 
      key, ... rest} = this.state
    navigate("/ViewModels")
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
        handleModelNavigation ={this.navToModels}
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
              />:<p>User Name: {user_name}</p>}
         <p 
         className = {button}
         onClick ={()=>this.toggleEditUsername()}
         >
           Change
         </p>
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
                  />:<p>Email: {email}</p>}
             <p
             className = {button}
             onClick ={()=>this.toggleEditEmail()}
             >
               Change
             </p>
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
                /> :<p>PayPal Account: {paypal}</p>}
           <p 
           className = {button}
           onClick ={()=>this.toggleEditPaypal()}
           >
             Change
           </p>
        </div>
        
  		</div>
  		)
  }
}


export default UserProfile