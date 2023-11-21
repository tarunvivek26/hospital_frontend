import React,{Component} from 'react'
import DocNavigation from '../DocNavigation'
import Doctorusermain from './Doctorusermain'

class Doctoruser extends Component {
  //sending token information and bringing user details.
  render(){
      return (
        <div>
        <DocNavigation updateMode={this.props.update} modeValue={this.props.modeValue} Data={this.props.Data} islogout={this.islogout}/>
        <Doctorusermain/>
        </div>
      )
    }
  }
 

export default Doctoruser
