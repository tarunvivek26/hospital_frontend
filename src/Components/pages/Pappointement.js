import React from "react";
import Navigation from "../Navigation";
import Pmainapoint from "./Pmainapoint";

export default function Pappointment(props) {
  return <div>
    <Navigation updateMode={props.update} modeValue={props.modeValue} Data = {props.Data} />
   <Pmainapoint/>
  </div>;
}
