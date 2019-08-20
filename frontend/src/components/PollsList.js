import React from 'react';
import { Link } from 'react-router-dom';
// import ListPagination from './ListPagination';

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
            this.props.polls.map((element , key) =>{
                <div className="home-poll">
                    <h1><Link to="">{element.title}</Link></h1>
                    <p>{element.description}</p>
                </div>
            })


            
        </div>
  );
};

export default PollsList;



