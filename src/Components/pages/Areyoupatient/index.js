import {Component} from 'react'

import {Link} from "react-router-dom"

import './index.css'

class Areyoupatient extends Component {
  render() {

    return (
      <div className = "p-cont">
          <div className="head-cont">
            <h3 style={{color:"black"}}>
                You are Patient ?
              
            </h3>
            <p>  patients play a crucial role in the hospital management system, and their active participation is essential for effective healthcare delivery. Here are some key actions and responsibilities that patients should consider within a hospital management system:
</p>
          <Link to="/Plogin">
          <button className='button-main'> Log In here</button>
          </Link> 
          </div>
          <div>
            <img src ="/images/patient_login.png" alt ="my_imag" className="img-cont"/>
          </div>
    </div>
    )
  }
}


export default Areyoupatient
