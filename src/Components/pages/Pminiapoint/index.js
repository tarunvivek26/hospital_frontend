import React, {Component} from 'react';
import { MdOutlinePendingActions } from "react-icons/md";
import axios from 'axios';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
class Pminiapoint extends Component{
   canceled = async () =>{
    const {doc} = this.props;
    console.log(doc)
    let url = "http://localhost:5003/book/delete-doctorbooked/";
   const response =   axios
      .delete(url + doc._id)
      .then((res) => {
        console.log(res)
        if (res.status === 204) {
          window.location.reload();
        } 
      })
      .catch((err) => {
        console.log(err);
      });
   }
   payed = () =>{
    const {doc,isapproved} = this.props;
     
    if(isapproved){
      this.props.payment(doc._id)
    } 

    
  
  
   }

   approved = () =>{
    const {doc,isapproved} = this.props;
    if(isapproved){
      if( doc.Paymet === undefined){
        return(
          <tr>
            <td colSpan={2}>
    <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white"}} onClick = {this.payed}> Pay Now</Button>
  </td>
          </tr>
        )
      }
    }
    else{
      return "";
    }
  }
    render(){
        const {doc,isapproved} = this.props;
        return(
    <div style={{padding:"25px"}}>
      <Table bordered hover  striped="columns" variant={this.props.modeOut?"dark":"light"}  >
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
              <Table hover variant={this.props.modeOut?"dark":"light"} style={{width:"40%",height:"280px"}}>
                <tr style={{marginTop:"5px"}}>
                  <td>Doctor Name:</td>
                  <td style={{fontWeight:"bold"}}>{doc.dname}</td>
                </tr>
                <tr style={{marginTop:"20px"}}>
                  <td>Speciality:</td>
                  <td style={{fontWeight:"bold"}}> {doc.specality}</td>
                </tr>
                <tr>
                  <td> Contact:</td>
                  <td style={{fontWeight:"bold"}}> {doc.dname}</td>
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
                    <td> Status :
                    </td>
                    { 
                      doc.status === "Doctor approved" ?   <td style={{color:"green",fontWeight:"bold"}}> {doc.status}</td>
                      :   <td style={{color:"red",fontWeight:"bold"}}> {doc.status}</td>
                    }
                   
                </tr> 
                { 
                doc.Paymet === undefined ?
                <tr>
                <td> Payment</td>
                 <td style={{color:"red",fontWeight:"bold"}}> Not done</td>
               </tr> :
                  <tr>
                   <td> Payment</td>
                    <td style={{color:"green",fontWeight:"bold"}}>Payment done</td>
                  </tr>
                    
            
                }       
                {
                      doc.napprovedreason !== "" && 
                      <tr>
                         <td> Not approved Reason: </td>
                      <td style={{color:"red",fontWeight:"bold"}}> {doc.napprovedreason}</td> </tr>
                     
                    }
                  {
                      !doc.doctorapproved &&
                    <tr>
                    <td colSpan={2}>
                    <Button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white"}} onClick = {this.canceled}> X Cancel appointment</Button>
                  </td>
                      </tr>  
                  } 
                  {
                   isapproved &&
                   <tr>
                   <td> Doctor Fees:</td>
                   <td style={{fontWeight:"bold"}}> {doc.doctorFees}</td>
                 </tr> 
                  }
                  {
                    this.approved()
                  } 
              </Table>
            </td>
          </tr>
        </tbody>
      </Table>
      </div>
    )
    }
}

export default Pminiapoint