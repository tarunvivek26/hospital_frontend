import {Component} from "react"

import Doctorusermini from "../Doctorusermini"

class Doctorcanceled extends Component{
    state = {
        data : []
    }
    getApi = async () =>{
     const response = await fetch("http://localhost:5003/book")
     const data = await response.json();
     console.log(data)
     const email = localStorage.getItem("demail");
     const newdata = data.filter((doc) =>(
        doc.demail === email  && doc.iscancel
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
       const iscancel = true;
        return(
            <div style={{paddingTop:"40px",paddingLeft:"70px" ,backgroundImage:"url(./images/noappointmentbg.png)",backgroundPosition:"center",backgroundSize:"cover",paddingRight:"200px"}}>
                <h1 style={{textAlign:"center",fontFamily:"Roboto",color:"red",fontWeight:"bold"}}> Your Canceled Appointments</h1>
                { 
                data.length === 0 ?  
                <div style={{display:"flex",justifyContent:"center",height:"100%",width:"100%"}}>
                    <img src = "./images/noappointment.png"/>
                    </div>
                 :
                    data.map((doc) =>(
                        <Doctorusermini  doc = {doc} iscancel ={iscancel} />
                    )) 
                }
              
            </div>
        )
    }
}

export default Doctorcanceled