import agent from '../agent';
import Header from './Header';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Settings from '../components/Settings';
import PollEditor from '../components/EditPoll';
import PostEditor from '../components/EditPost';
import NotFound from './Errors/Notfound';
import { store } from '../store';
import { push } from 'react-router-redux';
import { 
  APP_LOAD, 
  REDIRECT,
 } from '../constants/actionTypes';



const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    ping : state.common.ping,
  }};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT })
});

class App extends React.Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirectTo) {
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem('jwt');
    if (token) {
      agent.setToken(token);
    }
    this.props.onLoad(Promise.all([token ? agent.Auth.current() : null , agent.Home.ping()]), token );
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            appName={this.props.appName}
            currentUser={this.props.currentUser} />
           
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/login" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/poll-edit" component={PollEditor}/>
                <Route path="/post-edit" component={PostEditor}/>
                <Route path="/settings" component={Settings}/>
                <Route path="/404" component={NotFound}/>
              </Switch>
            
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser} />
      </div>
    );
  }
}

App.contextTypes = {
  //variables
  appLoaded : PropTypes.bool.isRequired ,
  appName : PropTypes.string.isRequired,
  router: PropTypes.object.isRequired , 
  //methods 
  onRedirect : PropTypes.func.isRequired ,
};



export default connect(mapStateToProps, mapDispatchToProps)(App);
