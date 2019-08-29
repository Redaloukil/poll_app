import React from 'react';
import { connect } from 'react-redux';
import { 

} from '../../constants/actionTypes';


const mapDispatchToProps = dispatch => ({

    // onSelectChoice: payload =>
    //   dispatch({ type: , payload })
});

class Choice extends React.Component {
    
    setVote(){
        
    }
    
    render(){
        return (
            <div className="vote-choice">
               
            </div>
        )
    }
}

export default connect()(Choice)