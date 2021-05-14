import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './../../images/logo.png';

const Top = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" >
                    <Navbar.Brand as={Link} to='/' className='ml-5'>
                        <img src={logo} alt="" />
                        Lets Gtok</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto px-5 ml-5">
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/blog'>Blogs</Nav.Link>
                            <Nav.Link as={Link} to='/career'>Careers</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
        </div>
    );
};

export default Top;