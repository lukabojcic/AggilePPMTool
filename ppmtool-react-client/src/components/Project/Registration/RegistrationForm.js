import React, { Component } from 'react';
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { createUser } from './../../../actions/userActions';

class RegistrationForm extends Component {
    constructor() {
        super();
    
        this.state = {
            firstName: "",
            lastName: "",
            username: "",
            password: "",
            password2: "",
            errors: {}
        };
    
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
      }
    
      //life cycle hooks
      componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
          this.setState({ errors: nextProps.errors });
        }
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
      }
    
      onSubmit(e) {
        e.preventDefault();
        const createUser = {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          username: this.state.username,
          password: this.state.password,
          password2: this.state.password2,
        };
        this.props.createUser(createUser, this.props.history);
      }

  render() {
    const { errors } = this.state;

    return ((

        <div className="projects">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Registration</h1>
              <hr />
            
              <form onSubmit={this.onSubmit} method="POST" encType="utf8">
                <h6>First Name</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.firstName
                      })}
                      placeholder="First Name"
                      name="firstName"
                    />
                  </div>
                  <h6>Last Name</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Last Name"
                      name="lasttName"
                    />
                  </div>
                <h6>Username</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Username"
                      name="username"
                    />
                  </div>
                  <h6>Password</h6>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password"
                    />
                  </div>
                  <h6>Re-type password</h6>
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      placeholder="Password"
                      name="password2"
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

RegistrationForm.propTypes = {
    createUser: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
  };

const mapStateToProps = state => ({
    errors: state.errors
  });

  export default connect(
    mapStateToProps,
    { createUser }
     )(RegistrationForm);