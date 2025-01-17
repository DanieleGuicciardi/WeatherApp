import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

const WeatherFooter = () => {
  return(
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>WeatherApp</h5>
            <p>&copy; 2025 WeatherApp. Tutti i diritti riservati.</p>
          </Col>
          <Col md={4} className="text-center">
            <h6>Link utili</h6>
            <ul className="list-unstyled">
              <li><a href="#privacy" className="text-decoration-none text-light">Privacy</a></li>
              <li><a href="#terms" className="text-decoration-none text-light">Termini</a></li>
              <li><a href="#contact" className="text-decoration-none text-light">Contatti</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h6>Seguici</h6>
            <a href="#facebook" className="text-decoration-none text-light me-2">Facebook</a>
            <a href="#twitter" className="text-decoration-none text-light me-2">Twitter</a>
            <a href="#instagram" className="text-decoration-none text-light">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default WeatherFooter