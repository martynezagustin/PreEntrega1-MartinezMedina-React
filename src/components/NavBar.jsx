import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartWidget from './CartWidget.jsx';

function NavBar(props) {
  return (
    <>
      <Navbar bg="light" expand="lg" className="mb-3">
        <Container fluid>
          <Navbar.Brand href="#">{props.nombre}</Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Offcanvas
            className="expand-menu"
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton className="button-expand">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-lg`}
                className="navbar-brand"
              >
                {props.nombre}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1" className="navbar-links">Home</Nav.Link>
                <Nav.Link href="#action2" className="navbar-links">About Me</Nav.Link>
                <Nav.Link href="#action2" className="navbar-links">Contact</Nav.Link>
                <CartWidget />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
