import React from 'react'
import Curosels from "../Curosels";
import Footer from "../Footer";
import Aboutus from "./AboutUs"
import Areyoudoctor from "../pages/Areyoudoctor/index";
import Areyoupatient from "../pages/Areyoupatient/index";
import Areyouadmin from '../pages/Areyouadmin/index.js';

function LandingPage(props) {
  
  return (
    <div>
      <Curosels modeValue={props.modeValue} />
      <Areyoudoctor/>
      <Areyoupatient/>
      <Areyouadmin />
      <Aboutus />
    </div>
  )
}

export default LandingPage
