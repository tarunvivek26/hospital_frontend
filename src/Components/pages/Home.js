import React,{useEffect,useState} from "react";
import Navigation from "../Navigation";
import axios from 'axios';
import './Body.css'
import Footer from '../Footer'
import FAQ from '../FAQ/faqhome'

export default function Home(props) {
  //sending token information and bringing user details.
  const getUserData = async() =>{
    try{
      const response = await axios.post('http://localhost:5003/user/getUserData',{},{
        headers:{
          Authorization: "Bearer "+ localStorage.getItem("token"),
        }
      })
      console.log(response.data);
    }catch(error){
      console.log(error);
    }
  }

  //get user
 

  useEffect(() =>{
    getUserData()
  },[])

  useEffect(() =>{
    props.handleData()
  },[])


  return (
    <div>
      <Navigation updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
      <div className = "sec">
        <div className="head-con">
        <p className="pass">  patients play a crucial role in the hospital management system, and their active participation is essential for effective healthcare delivery. Here are some key actions and responsibilities that patients should consider within a hospital management system</p>
        </div>
        <div>
        <img src ="/images/pathome.jpg" alt ="my_imag" height="100%" width="200px"/>
        </div>
    </div>
    <FAQ />
    <Footer />
    </div>
  );
}
