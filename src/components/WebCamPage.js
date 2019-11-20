import React from "react"
import { Link, StaticQuery } from "gatsby"
import pageStyles from "../styles/webcam.module.css"
import Img from "gatsby-image"


const {
		container,
		imgContainer,
		img,
		camFunctions,
		coinContainer,
		chatDisplay,
		textInput,
		submit,
		chatBox,
		chatDiv
	} = pageStyles

class WebCamPage extends React.Component {
	constructor(props) {
		super(props);
		this.state={
			textArray:[]
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event){
		const target = event.target.value
		const name = event.target.name
		this.setState({
			[name]: target
		})
	}
	handleSubmit(){
		const text = this.state.textInput
		this.setState(pS =>{
		 pS.textArray.push(text)
		 pS.textInput = ""
		 return pS
		})

	}
	render(){
		return(
			<StaticQuery
			query = {graphql`{
							frenchie: file(relativePath: { eq: "frenchie.jpg" }) {
								childImageSharp {
									fluid(maxWidth: 1600) {
										...GatsbyImageSharpFluid
									}
								}
							}
							coin: file(relativePath: { eq: "coin.png" }) {
								childImageSharp {
									fluid(maxWidth: 900) {
										...GatsbyImageSharpFluid
									}
								}
							}
						}`
					}
					render={data=>{
						const {frenchie, coin} = data
						const {textArray} = this.state
						const {handleChange, handleSubmit} = this
						const mapText = textArray =>{
							return textArray.map((text, i)=>{
								return(
									<div key={i} className={chatDiv}>
										<p > You : {text}</p>
										<p>Negraaaaaa : Hey babe, the Playhouse is down for now. Come play with us later</p>
									</div>
									)
							})
						}
						
						return(
							<div className ={container}>
							{console.log(data)}
								<div className={imgContainer}>
									<video id="video" />
									<div className={camFunctions}>
										<div className={coinContainer}>
											<Img 
											className={img}
											fluid ={coin.childImageSharp.fluid} 
											alt = "coin"
											/>
										</div>
										
									</div>
								</div>
								<div className={chatDisplay}>
									<div className={chatBox}>
										{mapText(textArray)}
									</div>
									 <input 
									   id = {textInput}
									   name = "textInput"
									   type = "text" 
									   clearButtonMode='always'
									   onChange ={handleChange}
									   />
									   <input 
									   id = {submit}
									   name = "submit"
									   type = "submit" 
									   onClick ={handleSubmit}
									   />
								</div>
							</div>
				)
			}}/>
		)
	}
}

export default WebCamPage
