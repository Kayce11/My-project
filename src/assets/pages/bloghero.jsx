import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navbar from '../components/navbar'; 
import Blog from "./Blog";

const Hero = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="hero text-center py-5">
        <h1 className="display-5 fw-semibold">Educational Tour:Enjoy Reading!</h1>
        <Form className="d-flex justify-content-center mt-4">
          <Form.Control
            type="Text"
            placeholder="Type.."
            style={{ maxWidth: '300px' }}
          />
          <Button variant="warning" className="ms-2 px-4 text-white">
            Send
          </Button>
        </Form>
        <small className="text-muted d-block mt-2">
          Tell me your insights.
        </small>
      </Container>

      <Blog /> 
    </>
  );
};

export default Hero;
