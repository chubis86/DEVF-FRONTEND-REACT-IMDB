import React from 'react'
import { Link } from "react-router-dom"
import { Nav, Navbar, Container, NavLink } from 'react-bootstrap'

export default function NavComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">Catálogo de películas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <NavLink href="/comedia">COMEDIA</NavLink>
            <NavLink href="/independientes">INDEPENDIENTES</NavLink>
            <NavLink href="/top100">TOP 100 MOVIES EVER!!!</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

                        
      )
}
