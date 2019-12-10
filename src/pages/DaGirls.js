import React from "react"
import { navigate } from "gatsby"
import UserLogin from "../components/UserLogin"
import ModelRegister from "../components/ModelRegister"


import styles from "../styles/daModels.module.css"
import axios from "axios";

class DaGirls extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
      error:"",
      loginError:""
    }
    this.login = this.login.bind(this)
    this.userRegister = this.userRegister.bind(this)
  }

  login(data){
    axios(`http://localhost:7770/models/login`, {
      method: "POST",
      data
    })
      .then(resp => {
        console.log("RESPONCE DATA", resp);
        const modelCreds = resp.data.modelCreds
        console.log("modelCreds", modelCreds);

        if(modelCreds === "User not Found"){
        	this.setState({loginError:modelCreds})
        }else{
          console.log("modelCreds", modelCreds);
          window.localStorage.setItem("currentUser", modelCreds)
        
        navigate("/ModelProfile")
        }
      })
      .catch(err => console.log(`login err: ${err}`));
  }

  validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  areStringsEqual(str, str2){
    console.log("areStringsEqual",str, str2)
    return str === str2
  }
  userRegister(data){
    const {username, email, re_email, password, re_password, paypal, re_paypal} = data
    if(this.areStringsEqual(email, re_email)){
      console.log("emails are equal")
      if(this.validateEmail(email)){
          console.log("email is valid")
        if(email.length > 5){
          console.log("email is large enough")
            if(this.areStringsEqual(password, re_password)){
              console.log("passwords are equal")
              if(password.length > 5){
                console.log("password is long enough")
                const requestData = {username, email, password, paypal}
                if(paypal === re_paypal){
                  if(this.validateEmail(paypal)){
                  console.log("paypal is valid")
                    this.registerRequest(requestData)
                  }else{
                console.log("paypal is  Not valid")
                    return this.setState({error: "PayPal is not valid"})
                  }
                }else{
                  return this.setState({error: "PayPal accounts do not valid"})
                } 
              }else{
                console.log("password is NOT long enough")

                return this.setState({
                  error: "password needs to be longer than 5 characters" })
              }  
          }else{
              console.log("passwords are NOT equal")
            return this.setState({error: "Password does not match"})
          }
        }else{
            return this.setState({
                error: "Email needs to be longer than 5 characters"
              })
        }
      }else{
        return this.setState({error: "Email is not valid"})
      }
    }else{
    return this.setState({error: "Email does not match"})
    }
  }
  registerRequest(data){
    axios(`http://localhost:7770/models/register`, {
      method: "post",
      data
    })
	.then(resp => {
	    console.log("RESPONCE DATA: Register", resp);
      const modelCreds = resp.data.modelCreds
      console.log("modelCreds", modelCreds);

	    if(modelCreds === "User already created"){
	      console.log("Email in use")
	      this.setState({loginError:"Email address is in use"})
	    }else{

	      navigate("/ModelProfile",
            {
              state:modelCreds
            }
          )
        
	    }
	  })
	  .catch(err => console.log(`err: ${err}`));
  }
  render(){
    const {login, userRegister} = this
    const {container, requestContainer, vertLine, heading} = styles
    const {error, loginError} = this.state
    return(
        <div className={container}>
        <h1 className = {heading}>Model Registration</h1>
        	<div className={requestContainer}>
	        	<ModelRegister 
	              modelRegister ={userRegister}
	              error={error}
	            />
        	</div>
        	<div 
        		className={vertLine}>
        	</div>
            <div className={requestContainer}>
	        	<UserLogin 
	              error={loginError}
	              login ={login}
	            />
        	</div>

            
         </div>
      )
  }
}

export default DaGirls