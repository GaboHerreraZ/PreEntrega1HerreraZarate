import "./NavbarContainer.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaShoppingCart } from "react-icons/fa";

const NavbarContainer = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <h3>The Strongest</h3>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Hombres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camisetas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Mujeres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camisetas</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Niños" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Gorras</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Camisetas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2}>
              <FaShoppingCart />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarContainer;
