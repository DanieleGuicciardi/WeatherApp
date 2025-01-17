import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css'

const WeatherFooter = () => {
  return(
    <footer className="bg-dark text-white py-4 bottomFooter">
      <Container>
        <Row>
          <Col md={4} className="text-center text-md-start">
            <h5>WeatherApp</h5>
            <p>&copy; 2025 WeatherApp. All rights reserved.</p>
          </Col>
          <Col md={4} className="text-center">
            <h6>Useful links</h6>
            <ul className="list-unstyled">
              <li><a href="privacy" className="text-decoration-none text-light">Privacy</a></li>
              <li><a href="UnderDevelopment" className="text-decoration-none text-light">Terms</a></li>
              <li><a href="UnderDevelopment" className="text-decoration-none text-light">Contacts</a></li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-end">
            <h6>Follow us</h6>
            <a href="https://www.facebook.com/" className="text-decoration-none text-light me-2">Facebook</a>
            <a href="https://www.x.com/" className="text-decoration-none text-light me-2">Twitter</a>
            <a href="https://www.instagram.com/" className="text-decoration-none text-light">Instagram</a>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default WeatherFooter