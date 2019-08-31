import React from 'react';


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
                    <p>poll</p>
                </div>
            })


            
        </div>
  );
};

export default PollsList;



