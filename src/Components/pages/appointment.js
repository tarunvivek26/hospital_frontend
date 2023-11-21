import React from "react";
import Navigation from "../Navigation";
import BookingForm from "../BookingForm";

export default function appointment(props) {
  return <div>
    <Navigation updateMode={props.update} modeValue={props.modeValue} Data = {props.Data} />
    <BookingForm modeOut={props.modeValue} Data = {props.Data} />
  </div>;
}
