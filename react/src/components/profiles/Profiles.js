import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profiles";
import Header from "../layout/Header";
import Navbar from "../layout/navbar/Navbar";
import "./Profiles.css";

export class Profiles extends Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired,
    getProfiles: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="header-container">
          <Header />
        </div>

        <main>
          <h1>TRUCKERSI APP!</h1>
          <h2>Profile</h2>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Telephone number</th>
                <th>First name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.profiles.map(profile => (
                <tr key={profile.id}>
                  <td>{profile.id}</td>
                  <td>{profile.telephone_number}</td>
                  <td>{profile.first_name}</td>
                  <td>{profile.last_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
