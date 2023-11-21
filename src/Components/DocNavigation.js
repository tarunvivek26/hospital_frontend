import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

function DocNavigation(props) {
    const handleLogout = () =>{
        localStorage.clear();
    }
  return (
    <div>
      <Navbar
        expand="lg"
        bg={props.modeValue ? "dark" : "light"}
        data-bs-theme={props.modeValue ? "dark" : "light"}
        sticky="top"
      >
      <Navbar.Brand as={Link} to={'/docHome'} >
            <img src = "../images/logo.png" style={{width:"80px",height:"80px",marginLeft:"20px"}} alt="logo" />
          </Navbar.Brand> 
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/doctoruser'}>Pending appointments</Nav.Link>
              <Nav.Link as={Link} to={'/approved'}>Approved appointments</Nav.Link>
              <Nav.Link as={Link} to={'/cancel'}>Canceled appointments</Nav.Link>
              <Nav.Link as={Link} >Profile</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link ><i class="fa-solid fa-bell"></i></Nav.Link>
              <Nav.Link as={Link} to={'/dapointment'}><i class="fa-solid fa-user"></i> </Nav.Link>
              <Nav.Link as={Link} to={'/dlogin'} onClick={handleLogout}>Logout</Nav.Link>
              <Form inline>
                <Button type="submit" onClick={props.updateMode}>
                  {props.modeValue ? "Light" : "Dark"}
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default DocNavigation
