import React from 'react';


const PollChoices = (props) => {
    if(!props.choices) return <div>No Choice Yet</div>
    if(props.choices.length == 0) return (<div>This poll has no choices</div>)
    return (
        <div>
            {props.choices.map((poll , i ) => {
                <h1>{i}</h1>
            })}
        </div>
    )
}

export default PollChoices;