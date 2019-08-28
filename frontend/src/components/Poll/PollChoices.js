import React from 'react';
import Choice from './../Choice/index';

const PollChoices = (props) => {
    return (
        <div>
            props.choices.map((choice)=>{
                <Choice choice={choice}/>
            })
        </div>
    )
}

export default PollChoices;