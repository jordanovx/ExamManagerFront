import React from "react";
import { Navbar, Nav, Row, Col, Container } from "react-bootstrap";
import img from "../images/logo_finki.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import DrawerHome from "../components/DrawerHome";
class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar
        bg="light"
        variant="light"
        collapseOnSelect
        expand="lg"
        className="nav def"
      >
        <Container>
          <Row>
            <Col>
              <a href="/" className="finki-logo">
                {" "}
                <img src={img} alt="logo" height="45" width="45" />{" "}
              </a>
              <DrawerHome />
            </Col>

            <Col xs={10}>
              <Nav>
                <Nav.Link href="/"> Почетна </Nav.Link>
                <NavDropdown title="Професори" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/teachers">Преглед</NavDropdown.Item>
                  <NavDropdown.Item href="/addteachers">
                    Додади
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Простории" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/classrooms">
                    Преглед
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/addclassroom">
                    Додади
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Предмети" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/subjects">Преглед</NavDropdown.Item>
                  <NavDropdown.Item href="/addsubjects">
                    Додади
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Распоред" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/timetable">Преглед</NavDropdown.Item>
                  <NavDropdown.Item href="/addtimetable">
                    Додади
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="\login" className="najava">
                  Најава
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
