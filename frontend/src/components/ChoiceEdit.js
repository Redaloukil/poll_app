import React from 'react';
import {
    CHOICE_SUBMITTED,
} from '../constants/actionTypes';

const mapStateToProps = (state) => {
    
}

const dispatchStateToProps = (dispatch) => ({
    onSubmit : () =>
        dispatch({type : CHOICE_SUBMITTED  , payload : { }})

})

class ChoiceEdit extends React.Component {
    constructor(props){
        super(props);
        this.onSubmit = (ev) => {
            ev.preventDefault();
            
            
        }
    }

    render(){
        return (
            <div>
                <fieldset>
                    <input type="text" value=""/>
                    <button onClick={this.submit}>Add</button>
                </fieldset>
                

            </div>
        )
    }
}

export default ChoiceEdit;