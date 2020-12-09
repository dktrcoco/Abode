import React, { useState, useRef } from "react";
import { List, ListItem } from "../List";
// import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from "react-bootstrap";
// import "./style.css";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

// props.setCurrentPage will refer to the state of the currentPage from App.js
const Nav = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const ref1 = useRef(null)
  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleClick = (e) => {
    console.log(e.target.id);
    console.log("fired")
    props.setCurrentPage(e.target.id)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <a className="navbar-brand text-info font-weight-bolder" href="/">
        <span className="">Abode</span>
      </a>
      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <Link
          className="nav-link text-info"
          activeClass="active-link"
          to=""
          smooth={true}
          spy={true}
        >
          Log In
        </Link>

        <Link
          className="nav-link text-info"
          activeClass="active-link"
          to=""
          smooth={true}
          spy={true}
        >
          Sign Up
        </Link>
        
        <div id="features"
          className="nav-link text-info"
          activeClass="active-link"
          onClick={handleClick}
          to="#options"
          smooth={true}
          spy={true}
        >
          Features
        </div>

        <div id="team"
          className="nav-link text-info"
          activeClass="active-link"
          to="#aboutUs"
          onClick={handleClick}
          smooth={true}
          spy={true}
          // onClick function change a state value at App.js level
          // that would keep track of which page is currently rendering
          // make a useRef ref for each element you want to scroll to
        >
          About Us
        </div>
        
        <a href="#" className="btn btn-sm btn-info nav-link text-white">
          Test3
        </a>
      </div>
    </nav>
  );
};

export default Nav;
