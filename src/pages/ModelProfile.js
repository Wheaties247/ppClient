import React from "react"


import styles from "../styles/modelProfile.module.css"
import EditAttribute from "../components/EditAttribute"
import NavBar from "../components/NavBar"

class ModelProfile extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
      editUser_name:false,
      editAstro: false,
      editPaypal:false,
      editEmail: false
    }
    this.toggleEditUsername = this.toggleEditUsername.bind(this)
    this.toggleEditAstro = this.toggleEditAstro.bind(this)
    this.toggleEditPaypal = this.toggleEditPaypal.bind(this)
    this.toggleEditEmail = this.toggleEditEmail.bind(this)
  }

  
  handleChange(e){
  const name = e.target.name;
    this.setState({[name]:e.target.value});
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
  toggleEditAstro(){
    this.setState(prevState=>{
      prevState.editAstro = !prevState.editAstro 
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
  	const {container, editBox, button} = styles
    console.log("THIS.STATE", this.state)
    const {
        user_name,
        email, 
        paypal, 
        tokens, 
        astro_sign,
        picture_url
          } = this.props.location.state


  	return(
  		<div className={container}>
        <NavBar
          userInfo={this.props.location.state}
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

        <div  className={editBox}>
           {this.state.editEmail? <EditAttribute
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

           {this.state.editAstro? <EditAttribute 
                    type ="astro"
                    property = "astro_sign"
                    propertyVal={astro_sign}
                /> :<h2>Astrologic Sign: {astro_sign}</h2>}
           <h2 
           className = {button}
           onClick ={()=>this.toggleEditAstro()}>
             Edit Astrologic sign
           </h2>
        </div>
      {/* BREAK*/}

        <div className={editBox}>

           {this.state.editPaypal? <EditAttribute 
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

export default ModelProfile