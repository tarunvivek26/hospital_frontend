import React,{Component} from 'react'
import DocNavigation from '../DocNavigation'
import { Navigate } from 'react-router-dom';
import './Body.css'
import axios from 'axios';
import Footer from '../Footer'
import FAQ from '../FAQ/faqhome'

class DoctorHome extends Component {
  //sending token information and bringing user details.
  render(){
      const demail = localStorage.getItem("demail");
      return (
        <div>
          {
            demail===""&&<Navigate to="/dlogin"/>
          }
        <DocNavigation updateMode={this.props.update} modeValue={this.props.modeValue} Data={this.props.Data} islogout={this.islogout}/>
        <div className = "sec">
        <div className="head-con">
        <p className="pass">  In a hospital management website, doctors play a critical role in the seamless functioning of healthcare services. These professionals are central to patient care and are entrusted with various responsibilities within the digital ecosystem.</p>
        </div>
        <div>
        <img src ="/images/hero-img01.png" alt ="my_imag" height="100%" width="200px"/>
        </div>
    </div>
    <FAQ />
        <Footer />
        </div>
      )
    }
  }
 

export default DoctorHome
