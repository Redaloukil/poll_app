import React from 'react';
import { Link } from 'react-router-dom';
import poll from '../reducers/poll';

const PollsList = props => {
    if (!props.polls){
        return (
            <div>Still loading..</div>
        )
    }
    if(props.polls.length === 0){
        return (
            <div>
                <h1>No polls yet..</h1>
            </div>
        )
    }
    return (
        <div>
            this.props.polls.map((poll) =>{
                <div className="home-poll">
                    <h1><Link to="">{poll.title}</Link></h1>
                    <p>{poll.description}</p>
                </div>
            })


            
        </div>
  );
};

export default PollsList;



