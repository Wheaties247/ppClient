import React from "react"

class ModelRegister extends React.Component{
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
    console.log(this.state);
    this.props.modelRegister(this.state);
    
  }

  render(){

    return(
      <div className='logInComponent' >
      
      <form onSubmit={this.handleSubmit}>
      <h1>Register</h1>
        <input type= 'text' placeholder='Username' name= 'username' onChange={this.handleChange}/>
      <br />
        <input type= 'text' placeholder='Email' name= 'email' onChange={this.handleChange}/>
      <br /> 
        <input type= 'text' placeholder='Confirm Email' name= 're_email' onChange={this.handleChange}/>
      <br />
        <input type= 'password' placeholder='Password' name= 'password' onChange={this.handleChange}/>
      <br />
        <input type= 'password' placeholder='Confirm password' name= 're_password' onChange={this.handleChange}/>
      <br />

        <input type= 'text' placeholder='PayPal account' name= 'paypal' onChange={this.handleChange}/>
      <br />
        
        <input type= 'text' placeholder='Confirm PayPal' name= 're_paypal' onChange={this.handleChange}/>
      <br />
      
      <input type= 'submit' value='Submit' />
      
      </form>
      {this.props.error}
      </div>
      )
  }
}


export default ModelRegister
