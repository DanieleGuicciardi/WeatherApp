import React from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';

const WeatherNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">WeatherApp</Navbar.Brand>
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#forecast">Previsioni</Nav.Link>
          <Nav.Link href="#map">Mappa</Nav.Link>
        </Nav>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Cerca città"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Cerca</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default WeatherNavbar;