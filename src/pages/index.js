import React from "react"
import IntroLanding from "../components/IntroLanding"
import ResponsiveTab from "../components/ResponsiveTab"

class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state ={
    }
  }
  render(){
    const {error} = this.state
    return(
        <div>
            <IntroLanding />
            <ResponsiveTab />            
        </div>
      )
  }
}

export default IndexPage
