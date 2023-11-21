import {Component} from 'react'

import {Link} from "react-router-dom"

import './index.css'

class Areyoudoctor extends Component {
  render() {

    return (
      <div className = "p-cont">
          <div className="head-cont">
            <h3 style={{color:"black"}}>
                You are Admin ?
            </h3>
            <p> administrators are essential for maintaining the overall health, security, and functionality of a website. Their responsibilities encompass a wide range of tasks that contribute to the smooth operation of the site.</p>
          <Link to="/alogin">
          <button className='button-main'> Log In here</button>
          </Link> 
          </div>
          <div>
            <img src ="./images/admin.jpg" alt ="my_imag" className="img-cont" />
          </div>
    </div>
    )
  }
}

export default Areyoudoctor
