import React from 'react';
import EditChoice from '../ChoiceEdit';
import ChoiceEdit from '../ChoiceEdit';
import { connect } from 'react-redux'; 
import {    
    CHOICE_SUBMITTED ,
    CHOICE_EDIT_OPEN ,
    CHOICE_EDIT_CLOSE,
    CHOICE_FIELD_EDIT ,
} from '../../constants/actionTypes';
import agent from '../../agent';

const mapStateToProps = (state) => ({
     ...state.choiceEdit,
     id : state.poll
    
})
const mapDispatchToProps = (dispatch) => ({
    onChangeField : (value  , key ) => 
        dispatch({ type : CHOICE_FIELD_EDIT , value, key }),
    onSubmit : payload  => 
        dispatch({ type : CHOICE_SUBMITTED , payload}),
    onEditOpen : () => 
        dispatch({ type : CHOICE_EDIT_OPEN }),
    onEditClose : () => 
        dispatch({ type : CHOICE_EDIT_CLOSE }),
}) 

class PollChoiceEdit extends React.Component {

    constructor(props){
        super(props)

        this.submit = (ev) => {
            ev.preventDefault();
            agent.Choices.create(this.props.id , {text : this.props.choiceText});
            this.props.onSubmit(ev.target.value);
        }
        this.onChangeChoiceText = (ev) => { this.props.onChangeField( ev.target.value , 'choiceText')}
        
    }
    

    render(){
        return (
            <div>
                { this.props.edit ? null : <button onClick={this.props.onEditOpen}>+</button>}
                { !this.props.edit ? null :<fieldset>
                    <input type="text" value={this.props.choiceText} onChange={this.onChangeChoiceText}/>
                    <button onClick={this.props.onSubmit}>Add</button>
                    <button onClick={this.props.onEditClose}>X</button>
                </fieldset> }
            </div>
        )
    }
}



export default connect(mapStateToProps , mapDispatchToProps)(PollChoiceEdit);