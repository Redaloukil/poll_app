import React from 'react';
import { 
    POLL_PAGE_LOADED,
    POLL_PAGE_UNLOADED ,
} from './../../constants/actionTypes';
import agent from './../../agent';
import { connect } from 'react-redux';


const mapStateToProps = state => ({
    ...state.poll,
});
  
const mapDispatchToProps = dispatch => ({
    onLoad: payload =>
      dispatch({ type: ARTICLE_PAGE_LOADED, payload }),
    onUnload: () =>
      dispatch({ type: ARTICLE_PAGE_UNLOADED })
});

class Poll extends React.Component {
    componentWillMount(){
        if (this.props.match.params.slug) {
            return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
          }
          this.props.onLoad(null);
    }

    componentWillUnmount(){
        this.props.onUnload();
    }
    render(){
        return(
            <div>
            
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Poll);