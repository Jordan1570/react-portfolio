import React, { useState } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import About from '../AboutPage/About';
import Contact from '../ContactPage/Contact';
import Project from '../ProjectsPage/Project';
import Resume from '../ResumePage/Resume';


export default function NavbarOne() {

    const [page, setPage] = useState()

    const handlePage = (pg) => {
        setPage(pg)
    }

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <ul><a onClick={() => handlePage('About')}>About</a></ul>
                            <ul><a onClick={() => handlePage('Project')}>Portfolio</a></ul>
                            <ul><a onClick={() => handlePage('Contact')}>Contact</a></ul>
                            <ul><a onClick={() => handlePage('Resume')}>Resume</a></ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {page === "About" && <About />}
            {page === "Project" && <Project />}
            {page === "Contact" && <Contact />}
            {page === "Resume" && <Resume />}

        </div>
    )
}
