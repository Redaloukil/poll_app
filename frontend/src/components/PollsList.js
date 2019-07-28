import React from 'react';
import { Link } from 'react-router-dom';
import ListPagination from './ListPagination';

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
    const pollsCount = this.props.polls.length
    return (
        <div>
            this.props.polls.map((poll) =>{
                <div className="poll">
                    <Link>poll</Link>
                    
                </div>
            })


            <ListPagination/>
        </div>
  );
};

export default PollsList;



