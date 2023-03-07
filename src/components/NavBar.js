import { NavLink } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} to="/" exact activeClassName="active">
            Welcome to Icebox
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about" exact activeClassName="active">
            About us
          </Nav.Link>
          <Nav.Link as={NavLink} to="/storefront" exact activeClassName="active">
            Shop here!
          </Nav.Link>
          <Nav.Link as={NavLink} to="/cart" exact activeClassName="active">
            View cart
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
