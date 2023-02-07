import { Link, NavLink } from "react-router-dom";
import {Navbar, Container} from "react-bootstrap";
import { House, Envelope} from 'react-bootstrap-icons';
function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="danger">
        <Container className="justify-content-start">
          <NavLink to="/" className="text-white ms-3 text-decoration-none">
          <House/> Home
          </NavLink>
          <NavLink to="/contacto" className="text-white ms-3 text-decoration-none">
            <Envelope/> Contacto
          </NavLink>
          </Container>
          <Navbar.Brand>Happy Cake</Navbar.Brand>
        
      </Navbar>{" "}
    </>
  );
}
export default Navigation;
