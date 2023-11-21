import React from "react";
import Navigation from "../../Navigation";
import Papproved from "../Papproved";

export default function Ppayappointment(props) {
  return <div>
    <Navigation updateMode={props.update} modeValue={props.modeValue} Data = {props.Data} />
   <Papproved/>
  </div>;
}
