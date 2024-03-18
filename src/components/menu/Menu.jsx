import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import Logo from "../../assets/logo.png"
import { BsFillTelephoneFill } from "react-icons/bs";
import "./menu.css"

const Menu = () => {
  return (
    <Navbar expand="lg" className='main'>
    <Container>
      <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">About Us</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#link">Features</Nav.Link>
          <Nav.Link href="#link">FAQ</Nav.Link>
          <Nav.Link href="#link">Blog</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className='nav-btn'>
        <a href="#"><BsFillTelephoneFill className='icon' />Contact Us</a>
      </div>
    </Container>
  </Navbar>
  )
}

export default Menu