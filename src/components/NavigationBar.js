import React from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap';

class NavigationBar extends React.Component {

    render()
    {
        return(
            <div>
                <Navbar bg="light" variant="light">
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/"> </Nav.Link>
                        <Nav.Link href="/teachers">Професори</Nav.Link>
                        <Nav.Link href="/classrooms">Простории</Nav.Link>
                        <Nav.Link href="/timetable">Распоред</Nav.Link>
                    </Nav>

                </Navbar>
            </div>)
    }
}

export default NavigationBar;