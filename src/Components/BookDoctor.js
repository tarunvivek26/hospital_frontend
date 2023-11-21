import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

 class  BookDoctor extends Component {
 state = {
  isNavigate : false
 }
  booked = () =>{
    const {doctor} = this.props;
    console.log(doctor)
     this.props.doctorBook(doctor._id);
  }
  render(){
    const {doctor} = this.props;
    return ( 
    <div style={{padding:"25px",backgroundColor:this.props.modeOut?"grey":"white"}}>
      <Table bordered hover  striped="columns" variant={this.props.modeOut?"dark":"light"} >
        <tbody>
          <tr>
            <td>Image</td>
            <td>Details</td>
          </tr>
          <tr>
            <td style={{width:"20%"}}>
            <img src={doctor.image} alt='doctor' style={{height:'150px',width:'150px'}}/>
            </td>
            <td>
              <Table hover variant={this.props.modeOut?"dark":"light"}>
                <tr>
                  <td>Name:</td>
                  <td>{doctor.name}</td>
                </tr>
                <tr>
                  <td>Speciality:</td>
                  <td>{doctor.specality}</td>
                </tr>
                <tr>
                  <td> Contact:</td>
                  <td> {doctor.email}</td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",boxShadow:"0px 0px 2px 2px yellow ",color:"white"}} onClick = {this.booked}>Book Now</Button>
                  </td>
                </tr>
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
  
      
    )
  }
  
}

export default BookDoctor