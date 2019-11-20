import React from "react"
import styles from "../styles/login.module.css"

class Login extends React.Component{
constructor(props) {
    super(props);
    this.state ={}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state);
    console.log(this.state);
  }

  render(){
    const {heading} = styles
    console.log("Login: error", this.props.error)
    return(
      <div className='logInComponent' >
        <form onSubmit={this.handleSubmit}>
          <h1>Log In</h1>
          <label>
         Email or Username: (Between 5-25 characters)
          <input type= 'text' placeHolder='Between 5-25 characters' name= 'username' onChange={this.handleChange}/>
          </label>
          <label>
          Password: (Between 6-25 characters)
          <input type= 'password' placeHolder='Between 5-25 characters' name= 'password' onChange={this.handleChange}/>
          </label>
          <input type= 'submit' value='Submit' />
        </form>
      {this.props.error}
      </div>
      )
  }
}


export default Login
