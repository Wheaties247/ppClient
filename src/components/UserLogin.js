import React from "react"
import styles from "../styles/login.module.css"

class UserLogin extends React.Component{
constructor(props) {
    super(props);
    this.state ={}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event){
    const name = event.target.name;
    this.setState({ [name]: ((event.target.value).trim()).replace(" ", "") });
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.login(this.state);
    console.log(this.state);
  }

  render(){
    const {heading} = styles
    return(
      <div className='logInComponent' >
      
      <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>
      <label>
      <input type= 'text' placeholder="Email / Username" name= 'username' onChange={this.handleChange}/>
      </label>
      <br />
      <label>
      <input type= 'password' placeholder='Password' name= 'password' onChange={this.handleChange}/>
      </label>
      <br />
      <input type= 'submit' value='Submit' />
      
      </form>
      {this.props.error}
      </div>
      )
  }
}


export default UserLogin
