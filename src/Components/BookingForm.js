import React, {Component} from "react";
import BookDoctor from "./BookDoctor";
import Dbookform from "./pages/Dbookform";
import Form from "react-bootstrap/Form";

 class BookingForm extends Component {
  state = {
    illness : "",
    doctorsObj : [],
    MainList : [],
    bookdoctor : []
  }
  changedSelect = (event) => {
   const {doctorsObj,MainList} = this.state;
   const ill = event.target.value;
   let updateDoctorsObj = MainList;
   if(ill === "skin"){
     updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Dermatologist"
    ))
   }
   else if(ill === "fever" || ill === "cold" || ill === "colf"){
    updateDoctorsObj = MainList.filter((doc) =>(
     doc.specality === "General"
   ))
  }
  else if(ill === "heart"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Cardiologist"
    ))
  }
  else if(ill === "stomach"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Gastroenterology"
    ))
  }
  else if(ill === "brain"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Neurologist"
    ))
  }
  else if(ill === "eye"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Ophthalmology"
    ))
  }
  else if(ill === "ent"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Otolaryngology"
    ))
  }
  else if(ill === "disorder"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Psychiatrist"
    ))
  }
  else if(ill === "harmone"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Endocrinologis"
    ))
  }
  else if(ill === "pregnancy"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Gynecologist"
    ))
  }
  else if(ill === "bone"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Orthopedics"
    ))
  } 
  else if(ill === "lungs"){
    updateDoctorsObj = MainList.filter((doc) =>(
      doc.specality === "Pulmonology"
    ))
  }
    this.setState({illness:event.target.value,doctorsObj:updateDoctorsObj});
  }
  componentDidMount(){
    this.getApi()
  }
  getApi = async () =>{
    const response = await fetch("http://localhost:5003/doctors");
    const data = await response.json();
    this.setState({
      doctorsObj : data,
      MainList : data
    },this.getUpdatedList)
  }
  doctorBook = (id) =>{
    const {MainList} = this.state;
    const doctor = MainList.filter((book) =>(
      book._id === id
    ))
    this.setState({bookdoctor : doctor})
  }
  render(){
    console.log(this.props)
    let {illness,doctorsObj,bookdoctor} = this.state;
    const len = bookdoctor.length;
     return (
      <div>
         {
      len === 1 ? <Dbookform choseddoctor = {bookdoctor} data = {this.props}/> : (
          <div style={{minHeight:"30vh",padding:"20px",backgroundColor:this.props.modeOut?"grey":"lightblue"}}>
          <p style={{fontSize:"30px",textDecorationStyle:"solid",color:this.props.modeOut?"white":"black"}}>Select the ill you are suffering.</p>
          <Form data-bs-theme={this.props.modeOut ? "dark" : "light"}>
            <Form.Select htmlSize="5" onChange={this.changedSelect}>
              <option value="fever">Fever</option>
              <option value="cold">Cold</option>
              <option value="eye"> Eye Problem</option>
              <option value = "colf">Colf  </option>
              <option value="ent">ENT</option>
              <option value="heart">Heart Problem</option>
              <option value="skin">Skin problem</option>
              <option value="lungs">Lung problem</option>
              <option value ="harmone"> hormonal imbalances
    </option>
              <option value = "pregnancy"> pregnancy problem</option>
              <option  value ="disorder">Mental health disorder</option>
              <option value="bone"> bones, joints, and muscles issues
    </option>
              <option value ="stomach"> gastrointestinal issues</option>
              <option value = "brain"> Brain issues</option>
              <option value="lungs">lungs issue</option>
              <option value="hair">Hair Fall</option>
            </Form.Select>
          </Form>
          <h2> Doctors are available:</h2>
          {
            doctorsObj.map((doctor) =>(
              <BookDoctor modeOut={this.props.modeOut} doctor = {doctor}  doctorBook = {this.doctorBook}/> 
            ))
          }
          
          </div>
        )
      }
      </div>
      
    
    );

  }
  
}


export default BookingForm