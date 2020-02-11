import React, { Component } from 'react';
// import cloudinary from "cloudinary-core"; 
import axios from 'axios';
import styles from "../styles/imageUpload.module.css"

const {container} = styles
class ImageUpload extends Component{
	constructor(props) {
    super(props);
    this.state ={
    }
    this.sendFileUpload = this.sendFileUpload.bind(this)
    this.handleChange = this.handleChange.bind(this);

  }
  sendFileUpload(e){
    console.log("sendFileUpload", this.state)

    e.preventDefault();
  	axios({
  		url:"http://localhost:7770/models/imgUpload",
  		method:"POST",
  		data: this.state
  	})
  	.then(resp=>{
  		console.log("End of imgUpload request", resp)
  	})
  	.catch(err => {
        console.log("there was an error @ imgUpload request", err);
      });
  }

  handleChange(e){
  const name = e.target.name;
  console.log(e.target.files[0])
    this.setState({[name]: e.target.files[0]});
  }
  render(){
  	 // const cl = new cloudinary.Cloudinary({
    //   cloud_name: "thepinkimageserver",
    //   secure: true});
  // 	const  myWidget = cloudinary.createUploadWidget({
  // cloudName: 'thepinkimageserver', 
  // uploadPreset: 'my_preset'}, (error, result) => { 
  //   if (!error && result && result.event === "success") { 
  //     console.log('Done! Here is the image info: ', result.info); 
  //   }
  // }
// )
// console.log("CL",cl)
  	return(
  		<div className = {container}>
      <form onSubmit = {this.sendFileUpload}>
  			<h1 >IMAGE UPLOAD</h1>
  			<input 
          type="file" 
          onChange={this.handleChange}  
          name="file"
          accept="image/png, image/jpeg"
            />
  			<input 
              type= 'submit' 
              value='Submit' 
             />
      </form>
  		</div>
  		)
  }
}

export default ImageUpload