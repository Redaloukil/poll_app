import React from 'react';
import { connect } from 'react-redux';

class Choice extends React.Component {
    
    setVote(){
        
    }
    
    render(){
        return (
            <div>
                <label>{props.text}</label>
                <button onClick={this.props.onVote}></button>
            </div>
        )
    }
}

export default connect()(Choice)