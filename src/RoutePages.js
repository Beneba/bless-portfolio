import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import Work from "./component/Work/Work";
import "./main";


function RoutePages() {
  return (
    <div>
      {/* <Header />    */}

      <Router>
      <header>
          <div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>

          <nav className="menu">
            <div className="menu-branding">
              <div className="portrait"></div>
            </div>
            <ul className="menu-nav">
              <li className="nav-item current">
              <Link to = "/Home" className="nav-link" >Home</Link>
                
              </li>
              <li className="nav-item">
                <Link to = "/About" className="nav-link" >About Me</Link>
              </li>
              <li className="nav-item">
              <Link to = "/Work" className="nav-link" > My Work</Link>
               
              </li>
              <li className="nav-item">
              <Link to = "/Contact" className="nav-link" >How To Reach Me</Link>
               
              </li>
            </ul>
          </nav>
        </header>


      {/* <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Work">Work</Link>
        <Link to="/Contact">Contact</Link> */}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Home" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Work" component={Work} />
          <Route path="/Contact" component={Contact} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default RoutePages;
