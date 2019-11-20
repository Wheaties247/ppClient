import React from "react"

class ModelLogin extends React.Component{
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
    this.props.login(this.state, "models");
    console.log(this.state);
  }

  render(){

    return(
      <div className='logInComponent' >
      
      <form onSubmit={this.handleSubmit}>
      <h1>Log In</h1>
      <label>
      Username: 
        <input type= 'text' placeholder='Between 5-25 characters' name= 'username' onChange={this.handleChange}/>
      </label>
      <br />
      <label>
      Password:
        <input type= 'password' placeholder='Between 5-25 characters' name= 'password' onChange={this.handleChange}/>
      </label>
      <br />
      
        <input type= 'submit' value='Submit' />
      <h2 className='memberQuery' >Not a member? <br /> Sign Up here</h2>
      </form>
      </div>
      )
  }
}


export default ModelLogin
