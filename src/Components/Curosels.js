import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Homestyle.css";

export default function Curosels(props) {
  return (
    <div style={{background:"transparent",height:"100vh"}}>
      <Carousel
        data-bs-theme={props.modeValue ? "dark" : "light"}
       style={{ backgroundColor: props.modeValue ? "grey" : "lightblue" }}
      >
        <Carousel.Item interval={1000} className="img" style={{width:"100%"}}>
          <img
            src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1LzM0MC1mZWxpeDEyNzdfMS5qcGc.jpg"
            alt="doctor image"
            className="image" 
          ></img>
          <Carousel.Caption >
            <h3 className="text">Provide An Exceptional Patient Experience</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className="img">
          <img
            src="https://thumbs.dreamstime.com/b/smiling-female-doctor-holding-medical-records-lab-coat-her-office-clipboard-looking-camera-56673035.jpg"
            alt="About Doctor"
            className="image"
          ></img>
          <Carousel.Caption>
            <h3 className="text">
              In our website, We provide good and experienced doctors.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000} className="img">
          <img
            src="https://www.motherhoodindia.com/wp-content/uploads/2021/09/Contact-page-Book-an-Appointment_Mobile-banner_578X364-px-02.jpg"
            alt="Appointment"
            className="image"
          ></img>
          <Carousel.Caption>
            <h3 className="text">You can book the doctor in your free time.</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
