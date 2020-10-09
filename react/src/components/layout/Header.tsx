import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

import "./Header.css";

import { IAuth } from "../../interfaces/auth"

export class Header extends Component<IAuth> {

  render() {
    const { isAuthenticated, user } = this.props.auth;

    const authLinks = (
      <div className="login-container">
        <span>
          <strong>{user ? `Witaj: ${user.username}` : ""}</strong>
        </span>
        <li className="nav-item">
          <button
            onClick={this.props.logout}
            className="nav-link btn btn-info btn-sm text-light"
          >
            Logout
          </button>
        </li>
      </div>
    );

    const guestLinks = (
      <div className="auth-links">
        <li className="nav-item">
          <Link to="/register" className="link">
            Rejestracja
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="link">
            Logowanie
          </Link>
        </li>
      </div>
    );

    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-light">
        <a className="navbar-brand" href="/">
          Navbar
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {isAuthenticated ? authLinks : guestLinks}
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Header);
