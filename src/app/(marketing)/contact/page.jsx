import ContactForm from "@/app/ui/components/ContactForm";
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Page = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 pt-3 pb-3">
      <Row className="w-100">
        <Col xs={12}>
          <h1 className="text-light text-center">Contact Form</h1>
        </Col>
        <Col xs={12} md={12} lg={12}>
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Page;
