import React from 'react';
import { Link } from 'react-router-dom';

const PollInfos = (props) => {
    return (
        <div>
            <h1><Link to="">{props.title}</Link></h1>
            <p>{props.description}</p>
            <Link to="">link to vote </Link>
        </div>
    )
}