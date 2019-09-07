import React from 'react';
import { Link } from 'react-router-dom';


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

            {props.polls.map((poll) =>{
                return (
                    <div className="home-poll">
                        <h1>{poll.title}</h1>
                        <p>{poll.description}</p>
                        <Link to={`/polls/${poll.id}`}>Make a poll</Link>

                    </div>
                )
            })}


            
        </div>
  );
};

export default PollsList;



