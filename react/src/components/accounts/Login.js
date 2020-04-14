import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return (
      <div className="form-registration">
        <div className="image-container">
          <figure className="form-registration-img">
            <img
              src="https://images.pexels.com/photos/192364/pexels-photo-192364.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
            />
            <figcaption className="form-registration-img-caption">
              TSLHub - logowanie
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
            name="username"
          />

          <input
            className="form-registration-input"
            type="password"
            placeholder="Hasło"
            onChange={this.onChange}
            value={password}
            name="password"
          />

          <input
            className="form-registration-submit-button"
            type="submit"
            value="Zaloguj"
          />
          <p className="or-divider">
            <span>or</span>
          </p>
          <a className="form-registration-social-button" href="/">
            <i className="fa fa-facebook-official" aria-hidden="true"></i> Sign
            Up With facebook
          </a>
          <p className="form-registration-member-signin">
            Nie masz jeszcze konta? <Link to="/register">Zarejestruj się</Link>
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

export default connect(mapStateToProps, { login })(Login);
