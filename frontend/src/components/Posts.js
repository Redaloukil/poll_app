import React from 'react';
import { connect } from 'react-redux';
import {
    POSTS_PAGE_LOADED ,
    POSTS_PAGE_UNLOADED ,
} from '../constants/actionTypes';
import NProgress from 'nprogress';
const mapStateToProps = state => ({ 
    ...state.polls 
});

const mapDispatchToProps = dispatch => ({
  onLoad : () => 
    dispatch({type : POSTS_PAGE_LOADED }),
  onUnload: () =>
    dispatch({ type: POSTS_PAGE_UNLOADED }),
});

class Posts extends React.Component {

    componentWillMount(){
        NProgress.start();
    }
    componentDidMount(){
        NProgress.done();
    }
    render (){
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

export default connect( mapStateToProps , mapDispatchToProps )(Posts);