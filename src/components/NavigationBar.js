import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import img from '../images/logo_finki.png';
import NavDropdown from "react-bootstrap/NavDropdown";
class NavigationBar extends React.Component {

    render()
    {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><img src={img} height="35" width="35"/></Navbar.Brand>
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
                        <NavDropdown title="Распоред" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/timetable">Преглед</NavDropdown.Item>
                            <NavDropdown.Item href="/addTimeTable">Додади</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav.Link href="/logout">Одјави се</Nav.Link>
                </Navbar>
            </div>)
    }
}

export default NavigationBar;