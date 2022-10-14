import React, { Component } from 'react';
import classnames from "classnames";

class RegistrationForm extends Component {
  render() {
    return ((
        <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Registration</h1>
              <hr />
            
              <form method="POST" enctype="utf8">
                <h6>First Name</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="First Name"
                      name="projectName"
                    />
                  </div>
                  <h6>Last Name</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="projectName"
                    />
                  </div>
                <h6>Username</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      name="projectName"
                    />
                  </div>
                  <h6>Password</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="projectIdentifier"
                    />
                  </div>
                  <h6>Re-type password</h6>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="description"
                    />
                  </div>
                  <input
                    type="submit"
                    value='Register'
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              
              <hr />
            </div>
          </div>
        </div>
      </div>
    ));
  }
}


export default RegistrationForm;