import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Navigation(props) {
  const handleLogout = () =>{
    localStorage.clear();
    <Navigate to="/plogin" replace={true} />
  }
  return (
    <div>
      <Navbar
        expand="lg"
        bg={props.modeValue ? "dark" : "light"}
        data-bs-theme={props.modeValue ? "dark" : "light"}
        sticky="top"
      >
      <Navbar.Brand as={Link} to={'/userHome'} >
            <img src = "../images/logo.png" style={{width:"80px",height:"80px",marginLeft:"20px"}} alt="logo" />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to= {'/Booking'}>Book oppointment</Nav.Link>
              <Nav.Link as={Link} to={'/pappointtment'}>Your appointments</Nav.Link>
              <Nav.Link as={Link} to={'/pay2'}> Doctor Aprroved appointments</Nav.Link>
              <Nav.Link as={Link} to={'/About'}>About us</Nav.Link>
            </Nav>
  
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link ><i class="fa-solid fa-bell"></i></Nav.Link>
              <Nav.Link as={Link} to={'/userProfile'}><i class="fa-solid fa-user"></i> {props.Data.fname}</Nav.Link>
              <Nav.Link as={Link} to={'/plogin'} onClick={handleLogout}>Logout</Nav.Link>
              <Form inline>
                <Button type="submit" onClick={props.updateMode}>
                  {props.modeValue ? "Light" : "Dark"}
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );  

}
