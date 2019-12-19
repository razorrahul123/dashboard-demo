import React from "react";
import logo from "./logo.svg";
import Dashboard from "./Dashboard";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="sidebar-container">
          <div className="logo-container">
            <div className="logo-img">
              <img src="https://demos.creative-tim.com/light-bootstrap-dashboard-react/static/media/reactlogo.9b864b36.png" />
            </div>
            <a href="">ZENATIX</a>
          </div>
          <div className="sidebar-wrapper">
            <ul className="sidebar-nav">
              <li>
                <Link to={"/"} className="nav-link">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="content-container">
        <Dashboard />
      </div> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
