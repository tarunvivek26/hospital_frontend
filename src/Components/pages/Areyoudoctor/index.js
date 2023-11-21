import {Component} from 'react'

import {Link} from "react-router-dom"

import './index.css'

class Areyoudoctor extends Component {
  render() {

    return (
      <div className = "p-cont">
          <div className="head-cont">
            <h3 style={{color:"black"}}>
                You are Doctor ?
              
            </h3>
            <p>  In our healthcare, doctors play a crucial role in patient care and contribute to the overall functioning of the healthcare facility. Here are some key responsibilities and activities that doctors may be involved in within a hospital management system:
These responsibilities may vary based on the doctor's specialty (e.g., surgeon, internist, pediatrician) and the specific policies and procedures of the hospital. Additionally, doctors may also be involved in administrative tasks related to hospital management, especially if they hold leadership positions within the healthcare facility.</p>
          <Link to="/dlogin">
          <button className='button-main'> Log In here</button>
          </Link> 
          </div>
          <div>
            <img src ="/images/doctorhome.png" alt ="my_imag" className="img-cont"/>
          </div>
    </div>
    )
  }
}


export default Areyoudoctor
