import React, { Component } from 'react';
import cloudinary from "cloudinary-core"; 
import axios from 'axios';

class ImageUpload extends Component{
	constructor(props) {
    super(props);
    this.state ={
    }
    this.sendFileUpload = this.sendFileUpload.bind(this)
    this.handleChange = this.handleChange.bind(this);

  }
  sendFileUpload(){
  	axios({
  		url:"http://localhost:7770/models/img_upload",
  		method:"post",
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
    this.setState({[name]:e.target.value});
  }
  render(){
  	 const cl = new cloudinary.Cloudinary({
      cloud_name: "thepinkimageserver",
      secure: true});
  // 	const  myWidget = cloudinary.createUploadWidget({
  // cloudName: 'thepinkimageserver', 
  // uploadPreset: 'my_preset'}, (error, result) => { 
  //   if (!error && result && result.event === "success") { 
  //     console.log('Done! Here is the image info: ', result.info); 
  //   }
  // }
// )
console.log("CL",cl)
  	return(
  		<div>
  			<h1 >IMAGE UPLOAD</h1>
  			<input onChange={this.handleChange} type="file" name="name"  />
  		</div>
  		)
  }
}

export default ImageUpload