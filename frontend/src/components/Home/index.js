
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  
} from '../../constants/actionTypes';
import PollsList from './../PollsList';
import PropTypes from 'prop-types';



const mapStateToProps = state => ({
  ...state.home,
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOME_PAGE_LOADED , payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED }),
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Polls.all());
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <h1>HOME PAGE</h1>
          <PollsList polls={this.props.polls}/>
        </div>
      </div>
    );
  }
}

// Home.prototype= {
//   home : PropTypes.object,
// }



export default connect(mapStateToProps, mapDispatchToProps)(Home);
