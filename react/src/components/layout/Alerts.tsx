import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
// 
import { IAlerts } from "../../interfaces/alerts"

export class Alerts extends Component<IAlerts> {
  componentDidMount() {
    this.props.alert.show("it works");
  }

  // static propTypes = {
  //   error: PropTypes.object.isRequired,
  //   message: PropTypes.object.isRequired
  // };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.user) alert.error(`User: ${error.msg.user.join()}`);
    }

    if (message !== prevProps.message) {
      if (message.passwordsNotMatch) alert.error(message.passwordsNotMatch);
    }
    if (error.msg.non_field_errors)
      alert.error(error.msg.non_field_errors.join());
    if (error.msg.username) alert.error(error.msg.username.join());
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = state => ({
  error: state.errors,
  message: state.messages
});

export default connect(mapStateToProps)(withAlert()(Alerts));
