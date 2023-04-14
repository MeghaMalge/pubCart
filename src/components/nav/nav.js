import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Login from "../login/login";

function NavMenu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">PubCart</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{ alignItems: "center" }}>
            <Nav.Link href="/members">Members</Nav.Link>
            <Nav.Link href="/cart">Cart</Nav.Link>
            <Nav.Link>
              <Login />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavMenu;
