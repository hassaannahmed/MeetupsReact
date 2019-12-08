import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="blue ">
          <div className="nav-wrapper">
            <a href="/" className="brand-logo center">
              Logo
            </a>
            <a
              data-target="main-menu"
              className="sidenav-trigger show-on-large"
            >
              <i className="fa fa-bars"></i>
            </a>
            <ul className="right hide-on-small-only">
              <li>
                <Link to="/">
                  <i className="fa fa-users"></i>Meetups
                </Link>
              </li>
              <li>
                <Link to="/meetups/add">
                  <i className="fa fa-plus"></i>Add Meetups
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default Navbar;
