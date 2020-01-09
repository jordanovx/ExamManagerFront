import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import img from "../images/logo_finki.png";
import NavDropdown from "react-bootstrap/NavDropdown";
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
        <Navbar.Brand href="/">
          <img src={img} alt="logo" height="35" width="35" />
        </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/"> Почетна </Nav.Link>
          <NavDropdown title="Професори" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/teachers">Преглед</NavDropdown.Item>
            <NavDropdown.Item href="/addteachers">Додади</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Простории" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/classrooms">Преглед</NavDropdown.Item>
            <NavDropdown.Item href="/addclassroom">Додади</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Предмети" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/subjects">Преглед</NavDropdown.Item>
            <NavDropdown.Item href="/addsubjects">Додади</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Распоред" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/timetable">Преглед</NavDropdown.Item>
            <NavDropdown.Item href="/addTimeTable">Додади</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Сесии" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/session">Преглед</NavDropdown.Item>
            <NavDropdown.Item href="/addsession">Додади</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav.Link className="odjava" href="/logout">
          Одјави се
        </Nav.Link>
      </Navbar>
    );
  }
}

export default NavigationBar;
