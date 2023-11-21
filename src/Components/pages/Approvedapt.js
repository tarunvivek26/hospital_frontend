import React,{Component} from 'react'
import DocNavigation from '../DocNavigation'
import Doctoraprrovemain from './Doctorapprovemain'

class Approvedapt extends Component {
  //sending token information and bringing user details.
  render(){
      return (
        <div>
        <DocNavigation updateMode={this.props.update} modeValue={this.props.modeValue} Data={this.props.Data} islogout={this.islogout}/>
         <Doctoraprrovemain/>
        </div>
      )
    }
  }
 

export default Approvedapt
