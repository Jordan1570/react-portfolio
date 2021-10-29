import React from 'react'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavbarOne from './Pages/Navbar/Navbar';
import About from './Pages/AboutPage/About';
import Resume from './Pages/ResumePage/Resume';
import Portfolio from './Pages/PortfolioPage/Portfolio'
import Contact from './Pages/ContactPage/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



function App() {
  return (
    <div>
      <Router>
        <NavbarOne />
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/contact-me">
            <Contact />
          </Route>
        </Switch>
        <footer style={{ textAlign: "center", marginBottom: "15" }}>
          <a href="https://github.com/Jordan1570"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/jordan-scott-109107218/"><FaLinkedinIn /></a>
        </footer>
      </Router>
    </div>
  );
}

export default App;
