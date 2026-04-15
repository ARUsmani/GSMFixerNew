"use client"; // Required for React Bootstrap and interactive components

import Link from "next/link";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand>
          <Link href="/" style={{ textDecoration: "none", color: "white" }}>
            GSM FIXER
          </Link>
        </Navbar.Brand>
        {/* Navbar Toggle (Hamburger Icon) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        {/* Collapsible Nav Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" className="nav-link">
              Home
            </Link>
            {/* <Link href="/gsmlist" className="nav-link">
              GSM List
            </Link> */}
            <Link href="/contact" className="nav-link">
              Support
            </Link>
            <Link href="/about" className="nav-link">
              About
            </Link>
           
          </Nav>
          <Nav className="justify-content-end ">
          <Link href="/adminlogin" className="nav-link">
              Admin
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
