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
    auth : state.auth,
    poll : state.poll,
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
            const slug = this.props.match.slug;
            const promise = new Promise();
            this.props.onLoad(Promise.all[agent.Polls.get(slug) ,agent.Choices.forPoll(slug)] );
        }
        this.props.onUnload();
    }
    
    render(){
        if (!this.props.poll) {
            return (
                <div>loading..</div>
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