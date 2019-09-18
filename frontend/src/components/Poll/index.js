import React from 'react';
import { 
    POLL_PAGE_LOADED,
    POLL_PAGE_UNLOADED,
} from './../../constants/actionTypes';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import agent from '../../agent';
import PollActions from './PollActions';
import PollChoices from './PollChoices';
import PollInfos from './PollInfos';
import NProgress from 'nprogress';
import PollChoiceEdit from './PollChoiceEdit';



const mapStateToProps = state => ({
    ...state.poll
});
  
const mapDispatchToProps = dispatch => ({
    onLoad:( payload) =>
      dispatch({ type: POLL_PAGE_LOADED , payload }),
    onUnload: () =>
      dispatch({ type: POLL_PAGE_UNLOADED })
});

class Poll extends React.Component {
    componentWillMount(){
        NProgress.start();
        if(this.props.match.params.id){
            return this.props.onLoad(Promise.all([
                agent.Polls.get(this.props.match.params.id), agent.Choices.forPoll(this.props.match.params.id)
            ]
        ));
        }
        this.props.onUnload();
    }
    componentDidMount(){
        NProgress.done();
    }
    
    render(){
        if(!this.props.body) return <div>Loading</div>
        return(
                <div>
                    <PollActions poll={this.props.body}/>
                    <PollInfos poll={this.props.body}/>
                    <PollChoices choices={this.props.choices}/>
                    <PollChoiceEdit id={this.props.match.params.id}/>
                </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Poll);