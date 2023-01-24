import { Link, NavLink } from "react-router-dom";
import {Navbar, Container} from "react-bootstrap";
function Navigation() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container className="justify-content-start">
          <Navbar.Brand>Happy Cake</Navbar.Brand>
          <NavLink to="/" className="text-white ms-3text-decoration-none">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink to="/contacto" className="text-whitems-3 text-decoration-none">
            {" "}
            Contacto{" "}
          </NavLink>
        </Container>
      </Navbar>{" "}
    </>
  );
}
export default Navigation;
