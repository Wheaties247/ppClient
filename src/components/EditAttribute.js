import React, { Component } from 'react';
import axios from 'axios';
import styles from "../styles/editAttribute.module.css"

const {editInput, container, selectContainer} = styles

class EditPost extends Component{
  constructor(props){
    super(props);
    this.state = {
      error:""
    }
    this.switchRender = this.switchRender.bind(this)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
handleChange(e){
  const name = e.target.name;
    this.setState({[name]:e.target.value});
  }
handleSubmit(e){
  console.log("running")
  if(this.props.type === "userName" && this.state.user_name.length <6){
  console.log("username error")

    return this.setState({error:"UserName must be greater than 5 characters"})
  }
  if(this.props.type === "email" || this.props.type ===  "paypal"){
    if(!(this.validateEmail(this.state.email))){
  console.log("email or paypal error")

       return this.setState({error:"UserName must be greater than 5 characters"})
       this.props.handleError("Invalid Email")
    }
  }
  const {error, ...info} = this.state
  this.setState({error:""})
  axios({
    url:`http://localhost:7770/${this.props.endpoint}/edit`,
    method:'PUT',
    data : info
  })
  .then(resp=>{
    console.log('PUT request Responce',resp);
  })
  .catch(err => {
        console.log("there was an error @ PUT request", err);
      });
}

componentDidMount(){
  const property = this.props.property
  const user_id = this.props.user_id
  this.setState({
         user_id : user_id,
        [property]:property
    })
}
switchRender(){

}
render(){
      console.log(this.props.type)

    if(!(this.props.type === "astro")){
      console.log("not astro Edit")

      return(
        <div className= {container}>

            <input 
                className={editInput}
                type='text' 
                placeholder = {`Edit ${this.props.propertyVal}`} 
                name = {this.props.property} 
                value={this.state.propertyVal} 
                onChange={this.handleChange}
             />
            <input 
              onClick = {()=>this.handleSubmit()}
              type= 'submit' 
              value='Submit Edit' 
             />
             {this.state.error}
        </div>
        )
    }else{
      console.log("astro Edit")
      return(
          <EditAstro handleSubmit ={this.handleSubmit} onChange = {this.handleChange}/>
      )
    }
  }
}
const EditAstro = props =>{
  return(
    <div className = {selectContainer}>
      <select name="astro_sign" form="carform" onChange ={props.onChange}>
        <option value="Aries">Aries</option>
        <option value="Taurus">Taurus</option>
        <option value="Gemini">Gemini</option>
        <option value="Cancer">Cancer</option>
        <option value="Leo">Leo</option>
        <option value="Virgo">Virgo</option>
        <option value="Libra">Libra</option>
        <option value="Scorpio">Scorpio</option>
        <option value="Sagittarius">Sagittarius</option>
        <option value="Capricorn">Capricorn</option>
        <option value="Aquarius">Aquarius</option>
        <option value="Pisies">Pisies</option>
      </select>
      <input 
        onClick = {props.handleSubmit}
        type= 'submit' 
        value='Submit Edit' 
       />
    </div>
    
    )
}

export default EditPost;