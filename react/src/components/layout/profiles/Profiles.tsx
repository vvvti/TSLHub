import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfiles } from "../../../actions/profiles";
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
        <main>
          {this.props.profiles.map(profile => (
            <div className="row" key={profile.id}>
              <div className="col-md-4" />

              <div className="col-md-3 profile-sidebar">
                <div className="profile-usertitle">
                  <img
                    src="https://365webresources.com/wp-content/uploads/2016/09/FREE-PROFILE-AVATARS.png"
                    className="img-thumbnail rounded-circle profile-usertitle-image"
                    alt="avatar"
                  />

                  <div className="profile-usertitle-name">
                    {profile.first_name}
                  </div>
                  <div className="profile-usertitle-name">
                    {profile.last_name}
                  </div>
                </div>
                <div className="profile-userbuttons">
                  <button type="button" className="btn btn-success btn-sm">
                    Wyloguj
                  </button>
                  <button type="button" className="btn btn-danger btn-sm">
                    Reset hasła
                  </button>
                </div>

                <ul className="list-group list-group-flush profile-userlist">
                  <li className="list-group-item">
                    <svg
                      className="bi bi-phone"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M8 14a1 1 0 100-2 1 1 0 000 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    telefon:{profile.telephone_number}
                  </li>
                  <li className="list-group-item">
                    <svg
                      className="bi bi-envelope"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 2a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2H2z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M.071 4.243a.5.5 0 01.686-.172L8 8.417l7.243-4.346a.5.5 0 01.514.858L8 9.583.243 4.93a.5.5 0 01-.172-.686z"
                        clipRule="evenodd"
                      />
                      <path d="M6.752 8.932l.432-.252-.504-.864-.432.252.504.864zm-6 3.5l6-3.5-.504-.864-6 3.5.504.864zm8.496-3.5l-.432-.252.504-.864.432.252-.504.864zm6 3.5l-6-3.5.504-.864 6 3.5-.504.864z" />
                    </svg>
                    email:{profile.email}
                  </li>
                  <li className="list-group-item">
                    <svg
                      className="bi bi-briefcase"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M0 12.5A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-6h-1v6a.5.5 0 01-.5.5h-13a.5.5 0 01-.5-.5v-6H0v6z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M0 4.5A1.5 1.5 0 011.5 3h13A1.5 1.5 0 0116 4.5v2.384l-7.614 2.03a1.5 1.5 0 01-.772 0L0 6.884V4.5zM1.5 4a.5.5 0 00-.5.5v1.616l6.871 1.832a.5.5 0 00.258 0L15 6.116V4.5a.5.5 0 00-.5-.5h-13zM5 2.5A1.5 1.5 0 016.5 1h3A1.5 1.5 0 0111 2.5V3h-1v-.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5V3H5v-.5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    firma:{profile.company_name}
                  </li>
                  <li className="list-group-item">
                    <svg
                      className="bi bi-chat"
                      width="2em"
                      height="2em"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.678 11.894a1 1 0 01.287.801 10.97 10.97 0 01-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 01.71-.074A8.06 8.06 0 008 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 01-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 00.244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 01-2.347-.306c-.52.263-1.639.742-3.468 1.105z"
                        clipRule="evenodd"
                      />
                    </svg>
                    skype:{profile.skype_number}
                  </li>
                </ul>
              </div>

              <div className="col-md-4" />
            </div>
          ))}
        </main>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  profiles: state.profiles.profiles
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
