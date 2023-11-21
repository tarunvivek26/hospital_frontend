import {Component} from "react"

import Pminiapoint from "../Pminiapoint"

import axios from "axios"

class Papproved extends Component{
    state = {
        data : [],
        obj:{},
        isclicked : false,
        payed :false
    }
    getApi = async () =>{
     const response = await fetch("http://localhost:5003/book")
     const data = await response.json()
     const email = localStorage.getItem("email");
     const newdata = data.filter((doc) =>(
        doc.pemail === email && doc.doctorapproved
     )) 
     this.setState({
        data : newdata
     })
    }
    payment = (id) =>{
        const {data} = this.state;
        const newdata = data.filter((doc) =>(
            doc._id === id
        ))
        const obj = newdata[0];
        this.setState({
            obj,
            isclicked : true
        })
    }
    payed = () =>{
        const {obj} = this.state;
    const obj1 = {Paymet : "payment done"}
    const url = "http://localhost:5003/book/update-doctorbooked/" + obj._id;
    axios
      .put(url, obj1)
      .then((res) => {
       console.log(res)
        if (res.status === 200) {
          alert("doctor updated");
        } 
      })
      .catch((err) => {
        console.log(err);
      });
        this.setState({
            payed : true,
            isclicked : false
        })

    }
    componentDidMount(){
        this.getApi();
    }
    render(){
        const {data,isclicked,obj,payed} = this.state;
 const isapproved = true;
       if(isclicked){
        return(
            <div style={{paddingTop:"40px",paddingLeft:"70px",backgroundImage:"url(./images/noappointmentbg.png)",backgroundPosition:"center",backgroundSize:"cover",paddingRight:"200px",display:"flex", 
            flexDirection:"column",color:"black",justifyContent:"center",alignItems:"center"}}>
                <div style={{border:"2px solid yellow",marginBottom:"50px",padding:"10px"}}>
                <p style={{color:"black"}}> Doctor Name : {obj.dname}</p>
                <p style={{color:"black"}}> Doctor Fees : {obj.doctorFees}</p>
                <p style={{color:"black"}}> date : {obj.bookeddate}</p>
                <p style={{color:"black"}}> time : {obj.bookedtime}</p>
                <button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white",padding:"5px",borderRadius:"5px"}} onClick = {this.payed}> Confirm Payment</button>
                </div>
               
                </div>
        )
       }
       else  if(payed){
        return(
            <div style={{paddingTop:"40px",paddingLeft:"70px",backgroundImage:"url(./images/noappointmentbg.png)",backgroundPosition:"center",backgroundSize:"cover",paddingRight:"200px",display:"flex", 
            flexDirection:"column",color:"black",justifyContent:"center",alignItems:"center"}}>
                <div style={{border:"2px solid yellow",marginBottom:"50px",padding:"10px"}}>
                   <img src = "./images/payment.png"/>
                <p style={{color:"black"}}> Doctor Name : {obj.dname}</p>
                <p style={{color:"black"}}> Doctor Fees : {obj.doctorFees}</p>
                <p style={{color:"black"}}> date : {obj.bookeddate}</p>
                <p style={{color:"black"}}> time : {obj.bookedtime}</p>
                <button type="submit"   style={{marginTop:"20px",backgroundColor:"red",border:"0px",color:"white",padding:"5px",borderRadius:"5px"}} onClick = {()=>(window.print())}>Print</button>
                </div>
               
                </div>
        )
       }
       else{
        return( 
            <div style={{paddingTop:"40px",paddingLeft:"70px",backgroundImage:"url(./images/noappointmentbg.png)",backgroundPosition:"center",backgroundSize:"cover",paddingRight:"200px"}}>
            
                {
                    data.length === 0 ? 
                    <div style={{display:"flex",justifyContent:"center",height:"100%",width:"100%"}}>
                    <img src = "./images/noappointment.png"/>
                    </div>:
                    data.map((doc) =>(
                        <Pminiapoint  doc = {doc} isapproved={isapproved} payment={this.payment}/>
                    ))
                }
                    
                
            </div>
        )
       }
       
    }
}

export default Papproved