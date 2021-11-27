import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import useAuth from "../../../utilities/context/useAuth";
import "./Navigation.css";
import { HashLink } from "react-router-hash-link";
import SideBar from "../../sideBar/SideBar";

/* you might khow the component, yes this is navigation bar to navigate all  */
const Nevigation = () => {
  const { user, logOut } = useAuth();
  const handelLogOut = () => {
    logOut();
  };
  return (
    <>
      <Navbar bg="secondary" expand="lg" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand>
            {" "}
            {/* nav title */}
            <h2 className="fw-bold"> <span className="text-warning">CAR</span>R <span className="text-warning">V</span>ana</h2>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto text-primary align-items-md-center">
              <Nav.Link as={HashLink} className="navlink" to="">
                <SideBar></SideBar>
              </Nav.Link>
              <Nav.Link as={HashLink} className="navlink btn btn-light fw-bold btnclr" to="/home">
                Home
              </Nav.Link>

              <Nav.Link as={HashLink} className="navlink btn btn-light fw-bold btnclr" to="/explore">
                Explore More
              </Nav.Link>

              {/* here this will run when user is logged in , here is the logout button and user name */}
              {user?.email ? (
                <>
                  <Nav.Link as={HashLink} className="navlink btn btn-light fw-bold btnclr" to="/dashboard">
                    Dashboard
                  </Nav.Link>

                  <Button
                    type="button"
                    onClick={handelLogOut}
                    className="btn btn-danger me-3 fw-bold"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <Nav.Link as={HashLink} className="navlink fw-bold" to="/Login">
                  Login
                </Nav.Link>
              )}

              {user.email && (
                <Navbar.Text>
                  Signed in as:
                  <span className="ms-2 btn btn-sark text-white fw-bold name-clr">
                    {user?.displayName}
                  </span>
                </Navbar.Text>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nevigation;
