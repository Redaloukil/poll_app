import React from 'react';
import { 
    POLL_PAGE_LOADED,
    POLL_PAGE_UNLOADED,
} from './../../constants/actionTypes';
import { connect } from 'react-redux';
import agent from '../../agent';


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
            this.props.onLoad(agent.Polls.get(id));
        }
        this.props.onUnload();
    }
    
    render(){
        if (!this.props.poll.body) {
            return (
                <div>Does Not Exist</div>
            )
        }
        if(!this.props.poll.body){
            
        }
        return(
                <div>
                    <h1>{this.props.poll.body.title}</h1>
                    <p>{this.props.poll.body.description}</p>
                </div>
        )
       
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(Poll);