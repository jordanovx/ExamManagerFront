import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';
import img from '../images/logo_finki.png';
class NavigationBar extends React.Component {

    render()
    {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="/"><img src={img} height="35" width="35"/></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/"> Почетна </Nav.Link>
                        <Nav.Link href="/teachers">Професори</Nav.Link>
                        <Nav.Link href="/classrooms">Простории</Nav.Link>
                        <Nav.Link href="/timetable">Распоред</Nav.Link>
                    </Nav>

                </Navbar>
            </div>)
    }
}

export default NavigationBar;