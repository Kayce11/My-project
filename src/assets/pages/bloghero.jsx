import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from '../components/navbar'; 
import Blog from "./Blog";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="hero text-center py-5">
        <h1 className="display-5 fw-semibold">Insights and stories from the world of design</h1>
        <Form className="d-flex justify-content-center mt-4">
          <Form.Control
            type="email"
            placeholder="Email address"
            style={{ maxWidth: '300px' }}
          />
          <Button variant="warning" className="ms-2 px-4 text-white">
            Subscribe
          </Button>
        </Form>
        <small className="text-muted d-block mt-2">
          Weekly updates delivered to your inbox. No spam.
        </small>
      </Container>

      <Blog /> 
    </>
  );
};

export default Hero;
