import {Component} from "react"
import axios from "axios"

import "./index.css"


class Dbookform extends Component{
  state = {
    isclicked : false,
    demail : "",
    pemail : "",
    dname :"",
    pname : "",
    specality:"",
    bookedtime: new Date(),
    bookeddate : new Date(),
    diease : ""
  }
  clicked = (event) =>{
    event.preventDefault();
    this.storedb()
  }
  storedb = () =>{
    const {choseddoctor,data} = this.props;
    const {name,email,specality,_id} = choseddoctor[0];
    const pemail = localStorage.getItem("email")
    const {bookeddate,bookedtime} = this.state;
    var sHours = bookedtime.split(':')[0];
    var year = bookeddate.split("-")[0];
    var month = bookeddate.split("-")[1];
    var date = bookeddate.split("-")[2];
    if(new Date(bookeddate).getYear() < new Date().getYear()){
      alert("Your book date must be tommmorow onwards");
    }
    else if(new Date(bookeddate).getMonth() < new Date().getMonth()){
      alert("Your book date must be tommmorow onwards");
    }
    else if (new Date(bookeddate).getDate() <= new Date().getDate()){
      alert("Your book date must be tommmorow onwards");
    }
    else if(sHours < 10){
        alert("working hours is bettwen 10 am to 6 pm")
    }
    else if(sHours > 18){
      alert("working hours is bettwen 10 am to 6 pm")
    }
    else{
      const obj = {
        demail : email,
        dname : name,
        specality : specality,
        bookeddate:this.state.bookeddate,
        bookedtime : this.state.bookedtime,
        diease : this.state.diease,
        pname : data.Data.fname,
        pemail,
        status :"Pending..",
        doctorapproved : false,
        napprovedreason : "",
        Payment :"Not done"
      }
      const url = "http://localhost:5003/book/doctorbooked";
    axios.post(url,obj).then((res) =>{
      console.log(res)
      if(res.status === 200){
        this.setState({
          isclicked : true
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
 
  
  }
  render(){
    const {choseddoctor,data} = this.props;
    console.log(data.Data)
    const {name,email,specality,_id} = choseddoctor[0];
    const {isclicked,bookeddate} = this.state;
    return(
        <div>
            <div className="formbold-main-wrapper" style={{backgroundImage:"url(./images/doctorusermain.jpg)",backdropFilter:"blur(2px)",backgroundSize:"cover"}}>
  <div className="formbold-form-wrapper">
    {
     isclicked ? (
      <div>
        <img src = "./images/bookedsucess.png"/>
        <h1 style={{color:"red",fontFamily:"Roboto",fontWeight:"bold"}}> Your appointment is Under review</h1>
        </div>
     ) : (
      <form onSubmit={this.clicked} style={{padding:"20px",borderRadius:"20px",border:"2px solid orange"}}>
      <div className="formbold-mb-5">
        <label forHtml="name" className="formbold-form-label" style={{color:"red",fontWeight:"bold"}}> Doctor Name </label>
        <input
          type="text"
          name="name"
          id="name"
          value = {name}
          placeholder="Full Name"
          className="formbold-form-input"
          readOnly 
        />
      </div>
      <div class="formbold-mb-5">
        <label for="email" class="formbold-form-label" style={{color:"red",fontWeight:"bold"}}> Doctor Email Address </label>
        <input
          type="email"
          name="email"
          id="email"
          value = {email}
          class="formbold-form-input"
          readOnly
        />
      </div>
      <div className="formbold-mb-5">
        <label for="phone" className="formbold-form-label" style={{color:"red",fontWeight:"bold"}} > Speciality </label>
        <input
          type="text"
          id="phone"
          value = {specality}
          className="formbold-form-input"
          readOnly
          />
      </div>
      <div class="flex flex-wrap formbold--mx-3">
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5 w-full">
            <label for="date" class="formbold-form-label" style={{color:"red",fontWeight:"bold"}}> Date <span style={{color:"red"}}> *</span></label>
            <input
              type="date"
              name="date"
              id="date"
              class="formbold-form-input"
              onChange={(event) =>(this.setState({bookeddate : event.target.value}))}
              required            />
          </div>
        </div>
        <div class="w-full sm:w-half formbold-px-3">
          <div class="formbold-mb-5">
            <label for="time" class="formbold-form-label" style={{color:"red",fontWeight:"bold"}}> Time <span style={{color:"red"}}> *</span> </label>
            <input
              type="time"
              name="time"
              id="time"
              class="formbold-form-input"
              onChange={(event) =>(this.setState({bookedtime : event.target.value}))}
              required
            />
          </div>
        </div>
      </div>
      <div className="formbold-mb-5">
        <label for="phone" className="formbold-form-label" style={{color:"red",fontWeight:"bold"}}> More detail about diease <span style={{color:"red"}}> *</span></label>
        <textarea rows ="5" cols="50"  onChange={(event) =>(this.setState({diease : event.target.value}))} style={{color:"black"}} required/>
      </div>
      
      <div>
        <button class="formbold-btn" type="submit">Book Appointment</button>
      </div>
    </form>
     )
    }
  </div>
</div>
 </div>
    )
  }

}

export default Dbookform