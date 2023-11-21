import React, {Component} from 'react';
import axios from 'axios';
import { MdOutlinePendingActions } from "react-icons/md";
import { Button } from 'react-bootstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class Doctorapprovemini extends Component{
  state = {
    iscancel : false
  }
  cancel = () =>{
    console.log("hi")
    this.setState({
      ispopup : true
    })
  }
  submit = () =>{
    this.setState({
      iscancel : true
    })
  }
    render(){
        const {doc} = this.props
        return(
    <div style={{padding:"25px"}}>
      <Table bordered hover  striped="columns" variant={this.props.modeOut?"dark":"light"} >
        <tbody>
          <tr>
            <td>Image</td>
            <td>Details</td>
          </tr>
          <tr>
            <td style={{width:"20%"}}>
            <img src='https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg' alt='doctor' style={{height:'150px',width:'150px'}}/>
            </td>
            <td>
              <Table hover variant={this.props.modeOut?"dark":"light"} style={{height:"240px"}}>
                <tr style={{marginTop:"5px"}}>
                  <td>Patient Name:</td>
                  <td style={{fontWeight:"bold"}}>{doc.pname}</td>
                </tr>
                <tr>
                  <td> Contact:</td>
                  <td style={{fontWeight:"bold"}}> {doc.pemail}</td>
                </tr>
                <tr>
                  <td> date:</td>
                  <td style={{fontWeight:"bold"}}> {doc.bookeddate}</td>
                </tr>
                <tr>
                  <td> time:</td>
                  <td style={{fontWeight:"bold"}}> {doc.bookedtime}</td>
                </tr>
                <tr>
                  <td> Your Fee:</td>
                  <td style={{fontWeight:"bold"}}> {doc.doctorFees} Rs</td>
                </tr>
                <tr>
                  <td> diease description:</td>
                  <td style={{fontWeight:"bold"}}> {doc.diease}</td>
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

export default Doctorapprovemini