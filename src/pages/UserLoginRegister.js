import React from "react"
import { navigate } from "gatsby"
import UserLogin from "../components/UserLogin"
import UserRegister from "../components/UserRegister"
import TokenService from "../services/TokenService";


import styles from "../styles/userLoginRegister.module.css"
import axios from "axios";

class UserLoginRegister extends React.Component{
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
    axios(`http://localhost:7770/users/login`, {
      method: "POST",
      data
    })
      .then(resp => {
        console.log("RESPONCE DATA", resp);
        const userCreds = resp.data.userCreds
        const {
        id,
        user_name,
        email,  
        tokens, 
        paypal
          } = userCreds
        if(userCreds === "User not Found"){
        	this.setState({loginError:userCreds})
        }else{
        window.localStorage.setItem("authToken", userCreds)
        // TokenService.save('id', id)
        // TokenService.save('user_name', user_name)


        navigate("/UserProfile",
          {
              state:userCreds
            }
         )
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
    const {username, email, re_email, password, re_password} = data
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
                const requestData = {username, email, password}
                this.registerRequest(requestData)
              }else{
                console.log("password is NOT long enough")

                return this.setState({
                  error: "password needs to be longer than 5 characters"
                })
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
    axios(`http://localhost:7770/users/register`, {
      method: "post",
      data
    })
	.then(resp => {
	    console.log("RESPONCE DATA", resp);
      const userCreds = resp.data.userCreds
	    if(userCreds ==="User already created"){
	      console.log("Email in use")
	      this.setState({loginError:"Email address is in use"})
	    }else{
	     
	      navigate("/UserProfile",
            {
              state:userCreds
            }
          )
	    }
	  })
	  .catch(err => console.log(`err: ${err}`));
  }
  render(){
    const {login, userRegister} = this
    const {container, requestContainer, vertLine} = styles
    const {error, loginError} = this.state
    return(
        <div className={container}>
        	<div className={requestContainer}>
	        	<UserRegister 
	              userRegister ={userRegister}
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

export default UserLoginRegister