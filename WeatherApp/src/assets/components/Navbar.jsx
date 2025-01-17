import React, { useState } from "react";
import { Navbar, Nav, Container, Form, FormControl, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const WeatherNavbar = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate(); 

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      navigate(`/weather/${city}`); 
    }
  };

  return (
    <Navbar className="weatherNavbar" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">WeatherApp</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="UnderDevelopment">Forecasts</Nav.Link>
            <Nav.Link href="UnderDevelopment">Map</Nav.Link>
          </Nav>

          <Form className="d-flex" onSubmit={handleSearch}>
            <FormControl
              type="search"
              placeholder="Search city weather"
              className="me-2"
              aria-label="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <Button variant="light" type="submit">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default WeatherNavbar;
