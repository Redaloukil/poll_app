import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({

  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  
  onChangeUsername: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
  
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  
  onChangeCPassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'cpassword', value }),
  
  onSubmit: (username, email, password) => {
    dispatch({ type: REGISTER, payload : agent.Auth.register(username, email, password) } )
  },
  
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      errors : {
      }
    }
    
    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.changeCPassword = ev => this.props.onchangeCPassword(ev.target.value);
    
    //Validation of register form fields
    this.validate = () => {
      const errors = {};
      if( this.state.username.length === 0 ) errors.username = "Invalid username";
      if( this.state.email.length === 0 ) errors.email = "Invalid email";
      if( this.state.password.length === 0 && this.state.password === this.state.cpassword) errors.password = "Invalid password";
      return errors;
    }

    //Submit of register form fields
    this.submitForm = (username , email, password) => ev => {
      ev.preventDefault();
      const errors = this.validate();
      if(Object.keys(errors).length == 0){
        this.props.onSubmit(username, email, password);
      }
    }
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const username = this.props.username;
    const email = this.props.email;
    const password = this.props.password;
    const cpassword = this.props.cpassword;
    


    return (
      <div className="auth-page">
        <div className="container page">
          <div className="row">

            <div className="col-md-6 offset-md-3 col-xs-12">
              <h1 className="text-xs-center">Sign Up</h1>
              <p className="text-xs-center">
                <Link to="/login">
                  Have an account?
                </Link>
              </p>

              <ListErrors errors={this.props.errors} />

              <form onSubmit={this.submitForm(username, email, password)}>
                <fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={this.changeUsername} 
                      defaultValue=""/>
                  </fieldset>
                  { this.state.username ? <span></span> : <span></span> }
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={this.changeEmail} 
                      defaultValue=""/>
                  </fieldset>
                  { this.state.email ? <span></span> : <span></span> }
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={this.changePassword} 
                      defaultValue=""/>
                  </fieldset>
                  { this.state.password ? <span></span> : <span></span> }
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="password"
                      placeholder="Password"
                      value={cpassword}
                      onChange={this.changeCPassword} 
                      defaultValue=""/>
                  </fieldset>
                  { this.state.cpassword ? <span></span> :null }
                  <button
                    className="btn btn-lg btn-primary pull-xs-right"
                    type="submit"
                    disabled={this.props.inProgress}>
                    Sign up
                  </button>
                </fieldset>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

Register.contextTypes = {
  username : PropTypes.string.isRequired,
  email : PropTypes.string.isRequired,
  password:PropTypes.string
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
