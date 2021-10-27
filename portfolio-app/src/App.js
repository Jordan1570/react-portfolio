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


function App() {
  return (
    <div>
      <Router>
        <NavbarOne />
        <Switch>
          <Route path="/about">
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
      </Router>
    </div>
  );
}

export default App;
