"use client";
import React, { useState } from "react";
import { FaUserEdit, FaUserLock } from "react-icons/fa";
import { Container, Button, Form, InputGroup } from "react-bootstrap";
import Image from "next/image";


const LoginForm = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default behavior initially
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation(); // Stop the event if validation fails
    } else {
      // Perform login logic here
      console.log("Form submitted successfully!");
    }

    setValidated(true);
  };

  return (
    <Container className="p-4" style={{ maxWidth: "400px", margin: "auto" }}>
      {/* Profile Image */}
      <div
        className="w-full max-w-md mx-auto bg-light rounded-circle overflow-hidden d-flex justify-content-center align-items-center mb-3"
        style={{ aspectRatio: "1 / 1", maxHeight: "200px" }}
      >
        <Image
          src="https://yvdijievreqnfbrvflus.supabase.co/storage/v1/object/public/cookieStore/avatar7.png?t=2025-01-26T11%3A15%3A00.473Z"
          alt="Profile Avatar"
          width={600}
          height={600}
          sizes="100vw"
          style={{
            width: "90%",
            height: "100%",
            objectFit: "cover",
          }}
          priority
        />
      </div>

      {/* Form */}
      <Form noValidate validated={validated} onSubmit={login} >
        <Form.Group className="mb-3">
          <InputGroup hasValidation>
            <InputGroup.Text>
              <FaUserEdit className="logIcon" />
            </InputGroup.Text>
            <Form.Control name="email" type="email" placeholder="Enter Email" required />
            <Form.Control.Feedback type="invalid">
              Please enter a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Form.Group className="mb-3">
          <InputGroup hasValidation>
            <InputGroup.Text>
              <FaUserLock className="logIcon" />
            </InputGroup.Text>
            <Form.Control name="password" id="password" type="password" placeholder="Enter password" required />
            <Form.Control.Feedback type="invalid">
              Please enter a password.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

        <Button type="submit" variant="primary" className="w-100">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default LoginForm;
