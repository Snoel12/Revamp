import React, { Component } from "react";

export default class Registration extends Component {
  render() {
    return (
      <div className="registration-page-container">
        <div className="registration-page-title">hello</div>
        <div className="registration-container">
          <div className="registration-title">Register</div>
          <div className="registration-form-container">
            <form>
              <div className="input-section">
                <div>
                  <label htmlFor="username">Username</label>
                  <input name="username" type="text" />
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
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
