import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div>
            <header>
                {/* Put Nav Inside Header Component */}
                <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="Nav">
                                <li className="nav-item active">
                                    <Link to="/" className="nav-link">About</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/resume" className="nav-link">Resume</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to="/contact-me" className="nav-link">Contact</Link>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
            {/* style={{ position: "fixed", top: 0, right: 0 }} */}
        </div>
    )
}
