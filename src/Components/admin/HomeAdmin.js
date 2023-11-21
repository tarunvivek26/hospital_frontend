import React from "react";
import AdminNav from './AdminNav'
import axios from 'axios';
import '../pages/Body.css'
import Footer from '../Footer'
import FAQ from '../FAQ/faqhome'


export default function HomeAdmin(props) {
  
  return (
    <div>
      <AdminNav updateMode={props.update} modeValue={props.modeValue}  Data={props.Data}/>
      <div className = "sec">
        <div className="head-con">
        <p className="pass"> An administrator, or admin, plays a crucial role in ensuring the smooth running of a website.</p>
        </div>
        <div>
        <img src ="/images/adminhome.jpg" alt ="my_imag" height="100%" width="200px"/>
        </div>
    </div>
    <FAQ />
    <Footer />
    </div>
  );
}
