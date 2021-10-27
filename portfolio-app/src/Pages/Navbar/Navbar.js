import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import {Link} from "react-router-dom";
import Home from '../AboutPage/About';
import Contact from '../ContactPage/Contact';
import Project from '../PortfolioPage/Portfolio';
import Resume from '../ResumePage/Resume';


export default function NavbarOne() {

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Nav">
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li>
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li>
                                <Link to="/contact-me">Contact</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
