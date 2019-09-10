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



const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({
    onLoad:( payload) =>
      dispatch({ type: POLL_PAGE_LOADED , payload }),
    onUnload: () =>
      dispatch({ type: POLL_PAGE_UNLOADED })
});

class Poll extends React.Component {
    componentWillMount(){
        if(this.props.match.params.id){
            const id = this.props.match.params.id;
            this.props.onLoad([agent.Polls.get(id) , agent.Choices.get(id)]);
        }
        this.props.onUnload();
    }
    
    render(){
        if (!this.props.poll.body) {
            return (
                <Redirect to='/404' />
            )
        }
        return(
                <div>
                    <PollActions poll={this.props.poll.body}/>
                    <PollInfos poll={this.props.poll.body}/>
                    <PollChoices poll={this.props.poll.body} choices={}/>
                </div>
        )
       
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Poll);