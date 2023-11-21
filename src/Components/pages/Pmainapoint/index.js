import {Component} from "react"

import Pminiapoint from "../Pminiapoint"

import "./index.css"

class Pmainapoint extends Component{
    state = {
        data : []
    }
    getApi = async () =>{
     const response = await fetch("http://localhost:5003/book")
     const data = await response.json()
     const email = localStorage.getItem("email");
     const newdata = data.filter((doc) =>(
        doc.pemail === email
     ))
     this.setState({
        data : newdata
     })
    }
    componentDidMount(){
        this.getApi();
    }
    render(){
        const {data} = this.state;
        return(
            <div style={{paddingTop:"40px",paddingLeft:"70px",backgroundImage:"url(./images/noappointmentbg.png)",backgroundPosition:"center",backgroundSize:"cover",paddingRight:"200px"}}>
                <h1 style={{textAlign:"center",fontFamily:"Roboto",color:"red",fontWeight:"bold"}}> Your Appointments</h1>
                {
                    data.length === 0 ? 
                    <div style={{display:"flex",justifyContent:"center",height:"100%",width:"100%"}}>
                    <img src = "./images/noappointment.png"/>
                    </div>:

                    data.map((doc) =>(
                        <Pminiapoint  doc = {doc}/>
                    ))
                }
            </div>
        )
    }
}

export default Pmainapoint