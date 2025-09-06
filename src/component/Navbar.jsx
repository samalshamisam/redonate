import React, { useEffect, useState } from "react";
import "../App.css";
import "../component/css/nav.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../image/logo.png';
const NavBar= () =>  {
    function makeActive(element){
        const navItem = document.querySelectorAll('a');
        element.classList.add('active');
    };
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
        setScrolled(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
    
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <>
    <Navbar  expand="lg"  className={"navbar-inverse" + (scrolled ? 'scrolled' : '' )} >
    <Container>
        <div className='logo'>
        <Navbar.Brand href="#Home">
        <img src={logo} title="logo" />
        </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
            <Nav className='nav-item  '> <Nav.Link href="/Home" className='nav-item active'>Home</Nav.Link></Nav>
            <NavDropdown title="About" id="basic-nav-dropdown">
                <NavDropdown.Item onclick="makeActive(element)" href="/About">About Us</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Services">Services</NavDropdown.Item>
                <NavDropdown.Item href="/Detalis"> Services Detalis</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="basic-nav-dropdown">
                <NavDropdown.Item href="/our-team">Our team </NavDropdown.Item>
                <NavDropdown.Item href="/our-studio">Our studio </NavDropdown.Item>
                <NavDropdown.Item href="/Studio">Studio Details </NavDropdown.Item>
                <NavDropdown.Item href="/book">Book Appointment </NavDropdown.Item>
                <NavDropdown.Item href="/FAQs">FAQs </NavDropdown.Item>
                <NavDropdown.Item href="/Error">404 Error </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Blog">Blog & News</NavDropdown.Item>
                <NavDropdown.Item href="/Post"> Single Blog</NavDropdown.Item>
            </NavDropdown>
            </Nav>
        <Nav className='nav-item  '>
            <Nav.Link eventKey={2} href="/contact" >CONTACT US </Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
        </>
    );
};

export default NavBar;