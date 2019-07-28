import React from 'react';
import { 
    POLL_PAGE_LOADED,
    POLL_PAGE_UNLOADED,
} from './../../constants/actionTypes';
import PollAction from './PollActions';
import PollInfos from './PollInfos';
import PollChoices from './PollChoices';
import { connect } from 'react-redux';
import agent from '../../agent';

const mapStateToProps = state => ({

});
  
const mapDispatchToProps = dispatch => ({
    onLoad:( payload) =>
      dispatch({ type: POLL_PAGE_LOADED , payload }),
    onUnload: () =>
      dispatch({  type: POLL_PAGE_UNLOADED })
});
class Poll extends React.Component {

    componentWillMount(){
        if(this.props.match.slug){
            this.props.onLoad(agent.Polls.get());
        }
        this.props.onUnload();

    }
    render(){
        if (!this.props.poll) {
            return (
                <div>Internal Error has been detected..</div>
            )
        }else {
            return(
                <div>
                    <PollAction/>
                    <PollInfos/>
                    <PollChoices/>
                </div>
            )
        }
        
    }
}

export default connect(()=>{}, mapDispatchToProps )(Poll);