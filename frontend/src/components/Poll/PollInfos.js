import React from 'react';
import { Link } from 'react-router-dom';

const PollInfos = (props) => {
    return (
        <div>
                <h1>{props.poll.title}</h1>
                <p>{props.poll.description}</p>
                
        </div>
    )
}

export default PollInfos;