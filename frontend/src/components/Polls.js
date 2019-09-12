import React from 'react';
import {connect} from 'react-redux';
import {
    POLLS_PAGE_LOADED ,
    POLLS_PAGE_UNLOADED ,
} from '../constants/actionTypes';
import agent from '../agent';
import PollsList from './PollsList';
import PropTypes from 'prop-types';


const mapStateToProps = state => ({ 
    token : state.auth.token,
    currentUser : state.auth.currentUser,
    polls : state.pollsList.polls, 
});

const mapDispatchToProps = dispatch => ({
  onLoad : ( payload ) => 
    dispatch({type : POLLS_PAGE_LOADED , payload }),
  onUnload: () =>
    dispatch({ type: POLLS_PAGE_UNLOADED }),
});

class Polls extends React.Component {
    componentWillMount(){
        this.props.onLoad(agent.Polls.all());
    }
    
    componentDidMount(){
        this.props.onUnload();
    }
    
    render(){
        return (
            <div>
                <h1>Polls</h1>
                <PollsList polls={this.props.polls}/>
            </div>
        )
    }
}


Polls.contextTypes = {
    token : PropTypes.string,
    currentUser : PropTypes.object,
    polls : PropTypes.object,
}

export default connect(mapStateToProps, mapDispatchToProps)(Polls);