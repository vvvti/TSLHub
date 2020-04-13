import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";
import { createMessage } from "../../actions/messages";
import "./Register.css";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    password2: ""
  };

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordsNotMatch: "Hasła nie są zgodne" });
    } else {
      const newUser = {
        username,
        password,
        email
      };
      this.props.register(newUser);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, email, password, password2 } = this.state;
    return (
      <div className="form-registration">
        <div className="image-container">
          <figure className="form-registration-img">
            <img
              src="https://images.pexels.com/photos/192364/pexels-photo-192364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <figcaption className="form-registration-img-caption">
              TSLHub - rejestracja
            </figcaption>
          </figure>
        </div>

        <form className="form-registration-group" onSubmit={this.onSubmit}>
          <input
            className="form-registration-input"
            type="text"
            placeholder="Nazwa użytkownika"
            onChange={this.onChange}
            value={username}
          />
          <input
            className="form-registration-input"
            type="email"
            placeholder="Adres email"
            onChange={this.onChange}
            value={email}
          />
          <input
            className="form-registration-input"
            type="password"
            placeholder="Hasło"
            onChange={this.onChange}
            value={password}
          />
          <input
            className="form-registration-input"
            type="password"
            placeholder="Powtórz hasło"
            onChange={this.onChange}
            value={password2}
          />
          <input
            className="form-registration-submit-button"
            type="submit"
            value="ZAREJESTRUJ"
          />
          <p className="or-divider">
            <span>or</span>
          </p>
          <a className="form-registration-social-button" href="/">
            <i className="fa fa-facebook-official" aria-hidden="true"></i> Sign
            Up With facebook
          </a>
          <p className="form-registration-member-signin">
            Masz już konto? <Link to="/login">Zaloguj się</Link>
          </p>
          <p className="form-registration-terms">
            <a href="/">Terms &amp; Conditions</a>|<a href="/">Privacy</a>
          </p>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, createMessage })(Register);
