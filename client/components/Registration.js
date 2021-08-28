import React from "react";
import { connect } from "react-redux";
import { authenticate } from "../store";

const RegistrationForm = (props) => {
  const { handleSubmit, error, name } = props;
  return (
    <div className="registration-page-container">
      <div className="registration-page-title">hello</div>
      <div className="registration-container">
        <div className="registration-title">Register</div>
        <div className="registration-form-container">
          <form onSubmit={handleSubmit} name={name}>
            <div className="input-section">
              <div>
                <label htmlFor="username">Username</label>
                <input name="username" type="text" />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="text" />
              </div>
              <div>
                <label htmlFor="firstName">First name</label>
                <input name="firstName" type="text" />
              </div>
              <div>
                <label htmlFor="lastName">Last name</label>
                <input name="lastName" type="text" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" />
              </div>
              <div className="button-container">
                <button className="submit-button" type="submit">
                  Register
                </button>
              </div>
              {error && error.response && <div> {error.response.data} </div>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    name: "signup",
    error: state.auth.error,
  };
};

const mapDispatch = (dispatch, { history }) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const username = evt.target.username.value;
      const password = evt.target.password.value;
      const email = evt.target.email.value;
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;

      dispatch(
        authenticate(
          username,
          password,
          formName,
          email,
          firstName,
          lastName,
          history
        )
      );
    },
  };
};

export const Registration = connect(mapState, mapDispatch)(RegistrationForm);
