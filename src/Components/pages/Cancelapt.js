import React,{Component} from 'react'
import DocNavigation from '../DocNavigation'
import Doctorcanceled from './Doctorcanceled'

class Cancelapt extends Component {
  //sending token information and bringing user details.
  render(){
      return (
        <div>
        <DocNavigation updateMode={this.props.update} modeValue={this.props.modeValue} Data={this.props.Data} islogout={this.islogout}/>
         <Doctorcanceled/>
        </div>
      )
    }
  }
 

export default Cancelapt
