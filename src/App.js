import React from 'react'

import {
  HashRouter,
  Switch,
  Route,
} from "react-router-dom";


// import NavbarOne from './Pages/Navbar/Navbar';
import About from './Pages/AboutPage/About';
import Resume from './Pages/ResumePage/Resume';
import Portfolio from './Pages/PortfolioPage/Portfolio'
import Contact from './Pages/ContactPage/Contact';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
    <div>
      <HashRouter hashType="noslash">
        <Header />
        <Switch>
          <Route exact path="/" component={About}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route path="/resume" component={Resume}/>
          <Route path="/contact-me" component={Contact}/>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
