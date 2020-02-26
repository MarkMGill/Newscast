import React from 'react';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Navbar';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class NavigationBar extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg" className="mb-2">
                <Navbar.Brand href="#home">The Gill Newscast</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={'/Newscast'}>
                        <NavItem href="#">Home</NavItem>
                        </Link>
                        <NavItem href="#">Top News</NavItem>
                        <NavItem href="#">Local</NavItem>
                        <NavItem href="#">Sports</NavItem>
                    </Nav>
                    <Form inline>
                        <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }

}

export default NavigationBar;