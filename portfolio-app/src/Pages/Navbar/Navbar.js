import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

export default function NavbarOne() {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="">About Me</Nav.Link>
                            <Nav.Link href="">Portfolio</Nav.Link>
                            <Nav.Link href="">Contact Me</Nav.Link>
                            <Nav.Link href="">Resume</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
