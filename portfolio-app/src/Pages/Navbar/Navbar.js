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
            <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="Nav">
                            <li className="nav-link">
                                <Link to="/">About</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/resume">Resume</Link>
                            </li>
                            <li className="nav-link">
                                <Link to="/contact-me">Contact</Link>
                            </li>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
