import {React,Component} from "react"

import { Navigate } from "react-router-dom"
import {Link} from "react-router-dom"
import {TbHandClick} from "react-icons/tb"
import axios from "axios"

import "./index.css"


class DSignUp extends Component{
state = {
    name : "",
    email : "",
    password :123,
    cpassword : 123,
    specality: "",
    dob: new Date(),
    number : 123,
    gender : "",
    image:"",
    err : "",
    iserr: true,
    user : false
}
converToBase64 = (event) =>{
  console.log(event);
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]);
  reader.onload = ()=>{
    console.log(reader.result);
    this.setState({image:reader.result})
  }
  reader.onerror = error =>{
    console.log("Error: ",error);
  }
}
submitForm = (event) =>{
  event.preventDefault()
  const {password,cpassword,dob,specality,gender,image} = this.state;
  console.log(this.props)
  const year = new Date(dob).getYear();
  const year2 = new Date().getYear();
  if(specality === ""){
     this.setState({
      err : "* specality is required input",
     })
  }
  else if(gender === ""){
    this.setState({
      err: "* gender is required",
    })
  }
  else if(password !== cpassword){
    this.setState({
      err : " * password and confirm password must be same",
    })

  }
 else if((year2 - year) < 25){
  this.setState({
    err : " * your age must be greater tha 25",
  })
 }else if(image == ""){
  this.setState({
    err:"*must and should upload the image",
  })
 }else{
     this.storedData()
 }
 
}
storedData =  (event) =>{
 
    const {name,email,password,specality,dob,number,gender,image} = this.state;
    const obj = {
        name,
        email,
        password,
        specality,
        dob,
        number,
        gender,
        image
    }
   console.log(obj)
const url = "http://localhost:5003/doctors/create-doctor";
  axios.post(url,obj,{headers:
    {"Content-Type":"application/json",
    Accept:"application/json",
    "Acccess-Control-Allow-Origin":"*",
  }
}).then((res) =>{
    console.log(res)
    if(res.status === 200){
      this.setState({
        user : true
      })
    }
    else{
        Promise.reject()
    }
   })
   .catch((err) =>{
    alert(err)
   })
}


render() {
    console.log(this.props)
    const {user,err} = this.state;
    console.log(user)
    return( 
    <div className="main-cont" style={{backgroundImage : "url(../images/doctor_signup_bg2.jpg)"}}>
     <div>
      {user && (
          <Navigate to="/dlogin" replace={true} />
        )}

     </div>
    <form onSubmit={this.submitForm} className="form">
        <div className="input-box">
          <label>Full Name <span style={{color:"red"}}> *</span></label>
          <input type="text" placeholder="Enter full name" required onChange={(e) => this.setState({name : e.target.value})} />
        </div>
        <div className="input-box">
          <label>Email Address <span style={{color:"red"}} > *</span> </label>
          <input type="email" placeholder="Enter email address" required  onChange={(e) => this.setState({email : e.target.value})}/>
        </div>
        <div className="input-box">
          <label>Password <span style={{color:"red"}}> *</span></label>
          <input type="password" placeholder="Enter Password" required  onChange={(e) => this.setState({password : e.target.value})}/>
        </div>
        <div className="input-box">
          <label>Confirm Password <span style={{color:"red"}}> *</span></label>
          <input type="password" placeholder="Enter conform Password" required onChange={(e) => this.setState({cpassword : e.target.value})} />
        </div>
        <label style={{marginBottom:"10px"}}> Specialty <span style={{color:"red"}}> *</span></label>
        <div className="select-box">
            
              <select style={{background : "transparent"}} onChange={(e) => this.setState({specality : e.target.value})} required>
                <option hidden>Specialty</option>
                <option>General</option>
                
                <option>Gynecologist</option>
                <option>Dermatologist</option>
                <option>Cardiologist</option>
                <option>Endocrinologis</option>
                <option> Gastroenterology	</option>
                <option>  Neurologist</option>
               <option> Orthopedics</option>
                 <option> Psychiatrist</option>
                 <option> Pulmonology</option>
                 <option> Ophthalmology</option>
                 <option> Otolaryngology</option>
                 <option> Others</option>
               </select>
          </div>
        <div className="column">
          <div className="input-box" style={{marginRight:"20px"}}>
            <label>Phone Number <span style={{color:"red"}}> *</span></label>
            <input type="number" placeholder="Enter phone number" required  onChange={(e) => this.setState({number: e.target.value})}/>
          </div>
          <div className="input-box">
            <label>Birth Date <span style={{color:"red"}}> *</span></label>
            <input type="date" placeholder="Enter birth date" required  onChange={(e) => this.setState({dob: e.target.value})}/>
          </div>
        </div>
        <label > Gender <span style={{color:"red"}}> *</span></label>
        <div className="select-box"> 
            <select style={{background : "transparent"}} onChange={(e) => this.setState({gender : e.target.value})} required>
              <option hidden>Gender</option>
              <option>Male</option>
              <option> Female</option>
              <option> Others</option>
             </select>
        </div>
        <div className="input-box">
          <label >upload Image<span style={{color:"red"}}> *</span></label>
          <input type="file" accept="image/*" onChange={this.converToBase64} required></input>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <input type="address" placeholder="Enter street address" />
        </div>
        <div className='login-button-cont'>
            <Link to = "/dlogin" className="signup-button"> 
              <p>Login </p> 
              <TbHandClick/>
            </Link>
          <button type="submit" className="login-button">
            signup
          </button>
          </div>
         <p style={{color:"red"}}>  {err} </p>
        {/* <button type="submit" >Submit</button> */}
      </form>

 </div>
    )
}
}

export default DSignUp

