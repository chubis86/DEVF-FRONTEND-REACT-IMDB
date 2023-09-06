import React from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap'

export default function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/comedia">COMEDIA</NavLink>
            <NavLink href="/independientes">INDEPENDIENTES</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

                        
      )
}