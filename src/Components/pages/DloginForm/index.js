import {Component} from 'react'

import axios from "axios"

import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from "react-simple-captcha"

import { Navigate } from 'react-router-dom'
import {Link} from "react-router-dom"

import {TbHandClick} from "react-icons/tb"


import './index.css'

class Areyoudoctor extends Component {
  state = {
    email : "",
    password : "",
    err : "",
    user : false,
    captcha : ""
  }

  componentDidMount () {
    loadCaptchaEnginge(6); 
 };

  renderPasswordField = () => {
    return (
      <div>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type="password"
          id="password"
          className="password-input-filed"
          onChange = {(e) =>(this.setState({password : e.target.value}))}
        />
      </div>
    )
  }

  renderEmailField = () => {
    return (
      <div>
        <label className="input-label" htmlFor="username">
          EMAIL
        </label>
        <input
          type="email"
          id="username"
          className="username-input-filed"
          onChange = {(e) =>(this.setState({email: e.target.value}))}
        />
      </div>
    )
  }

loginSubmit =  (event) =>{
  event.preventDefault();

  this.getApi()
  } 
  getApi = async () => {
    const {email,password,captcha} = this.state;
    const url = "http://localhost:5003/doctors/login";
  let err = ""
  const obj = {
    email,
    password
}
  if(email === "" ){
    err ="* Enter your email"
    this.setState({
      err
    }
    )
  }
  else if(password === ""){
    err="* Enter your password"
    this.setState({
      err
    }
    )
  }
  else if (validateCaptcha(captcha)!==true) {
    err = "* captcha does not match";
    this.setState({
      err
    })
}
  else{
    axios
    .post(url, obj)
    .then((res) => {
      console.log(res.data === "Password incorrect")
      if(res.data === "login successfull"){
        localStorage.setItem("demail",email)
        this.setState({
          user : true
        })
      } 
      else if(res.data === "Password incorrect"){
        this.setState({
          err : "* Password incorrect"
        })
      }
      else if(res.data === "No record exits"){
       this.setState({
        err : "* No records found"
       })
      }    
    })
    .catch((err) => {
      alert(err);
    });
  }


}
  render(){
    // console.log(this.props)
    const {err,user} = this.state;
    return (
      <div className="login-form-container">
          <div>
         {user && (
          <Navigate to="/docHome" replace={true} />
        )}
         </div>
        <img
          src="../images/logo.png"
          className="login-website-logo-mobile-image"
          alt="website logo"
        />
        <img
          src="../images/doctor_login_image.jpg"
          className="login-image"
          alt="website login"
        />
        <form className="form-container" onSubmit={this.loginSubmit}>
          <img
            src="../images/logo.png"
            className="login-website-logo-desktop-image"
            alt="website logo"
          />
           <div className="input-container">{this.renderEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div>
            <div style={{backgroundColor:"orange",display:"flex",borderRadius:"10px",padding:'10px',marginBottom:"20px",textAlign:"center",alignItems:"center",justifyContent:"center"}}>
            <LoadCanvasTemplate />
          </div>
        <input type="text" placeholder='Enter the captcha' onChange={(event) =>this.setState({captcha:event.target.value})} style={{height:"40px",padding:"5px"}}/>
         </div>
          <div className='login-button-cont'>
            <Link to = "/dsignup" className="signup-button"> 
           <p>Sigup </p> 
            <TbHandClick/>
            </Link>      
          <button type="submit" className="login-button">
            Login
          </button>
          </div>
          <p style={{color:"red"}}> {err} </p>
        </form>
      </div>
    )
  }
}
export default Areyoudoctor

