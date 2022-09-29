import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'
import Footer from '../footer/footer'
import Header from '../header/header'


export class Layout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      taskInformation:[]
     
    }


  }

 c=()=> {
    this.setState({taskInformation:[]})
  }
  render() {
    return (
      <>
        <div >
        <div>
         <Header   />
         </div> 
        
       
         <div className='w-100'> {this.props.children }</div>
        
         
      
         <div>
        <Footer pathName={this.props.location.pathname} />
         </div>
       
        </div>

        {}
      </>
    )
  }
}


export default withRouter(Layout)
