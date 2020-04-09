import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../actions/profiles";

export class Profiles extends Component {
  static propTypes = {
    profiles: PropTypes.array.isRequired
  };
  componentDidMount() {
    this.props.getProfiles();
  }

  render() {
    return <div>Profiles</div>;
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
