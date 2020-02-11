import React from "react"


import styles from "../styles/modelProfile.module.css"
import EditAttribute from "../components/EditAttribute"
import NavBar from "../components/NavBar"
import ImageUpload from  "../components/ImageUpload"

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
    this.editRequestHandler = this.editRequestHandler.bind(this)
  }
  componentDidMount(){
      const currentUser = JSON.parse(window.localStorage.getItem('currentUser'))
    const {
        id,
        user_name,
        email, 
        paypal, 
        tokens, 
        astro_sign,
        picture_url,
        confirmed
          } = currentUser
        this.setState({
          id,
          user_name,
          email, 
          paypal, 
          tokens, 
          astro_sign,
          picture_url,
          confirmed
        })
  }
    editRequestHandler(info){
    console.log("editRequesthandler", info.resp)
    console.log("this.state", this.state)

    const {email, payment_info, tokens, user_id, user_name, astro_sign} = info.resp
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
  renderConfirmBox(style){
    return(
        <div className={style}>
       <p> Please Verify Account from Email used to create account</p>
       </div>
      )
  }
  render(){
  	const {container, editBox, button, confirmationBox} = styles
    console.log("THIS.STATE", this.state)
    const {
        id,
        user_name,
        email, 
        paypal, 
        tokens, 
        astro_sign,
        picture_url, 
        confirmed
          } = this.state


  	return(
  		<div className={container}>
        <NavBar
          currentRoute = "viewModels"
          handleModelNavigation ={null}
          userInfo={this.state}
        />
        {confirmed? null:this.renderConfirmBox(confirmationBox)}
        <div className={editBox}>
        <ImageUpload/>

       </div>
        <div className={editBox}>
          {this.state.editUser_name? <EditAttribute
                    editRequestHandler={this.editRequestHandler}
                    id ={id}
                    endpoint = "models"
                    type = "userName" 
                    property = "user_name"
                    propertyVal={user_name}
                    toggle = {this.toggleEditUsername}
                />:<p>User Name: {user_name}</p>}
           <p 
           className = {button}
           onClick ={()=>this.toggleEditUsername()}>
             Change
           </p>
        </div>
        {/* BREAK*/}

        <div  className={editBox}>
           {this.state.editEmail? <EditAttribute
                      editRequestHandler={this.editRequestHandler}
                      endpoint = "models"
                      id ={id}
                      type = "email" 
                      property = "email"
                      propertyVal={email}
                      toggle ={this.toggleEditEmail}
                  />:<p>Email: {email}</p>}
             <p 
             className = {button}
             onClick ={()=>this.toggleEditEmail()}>
               Change
             </p>
        </div>
        {/* BREAK*/}

        <div className={editBox}>

           {this.state.editAstro? <EditAttribute 
                    editRequestHandler={this.editRequestHandler}
                    endpoint = "models"
                    id ={id}
                    type ="astro"
                    property = "astro_sign"
                    propertyVal={astro_sign}
                    toggle = {this.toggleEditAstro}
                /> :<p>Astrologic Sign: {astro_sign}</p>}
           <p 
           className = {button}
           onClick ={()=>this.toggleEditAstro()}>
             Change
           </p>
        </div>
      {/* BREAK*/}

        <div className={editBox}>

           {this.state.editPaypal? <EditAttribute 
                    editRequestHandler={this.editRequestHandler}
                    endpoint = "models"
                    id ={id}
                    type ="paypal"
                    property = "paypal"
                    propertyVal={paypal}
                    toggle = {this.toggleEditPaypal}
                /> :<p>PayPal Account: {paypal}</p>}
           <p 
           className = {button}
           onClick ={()=>this.toggleEditPaypal()}>
             Change
           </p>
        </div>
      

  		</div>
  		)
  }
}

export default ModelProfile