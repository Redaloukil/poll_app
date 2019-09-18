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
     
    
})
const mapDispatchToProps = (dispatch) => ({
    onChangeField : (value  , key ) => 
        dispatch({ type : CHOICE_FIELD_EDIT , value, key }),
    onSubmit : payload  => 
        dispatch({ type : CHOICE_SUBMITTED , payload }),
    onEditOpen : () => 
        dispatch({ type : CHOICE_EDIT_OPEN }),
    onEditClose : () => 
        dispatch({ type : CHOICE_EDIT_CLOSE }),
}) 

class PollChoiceEdit extends React.Component {

    constructor(props){
        super(props)

        
        this.onChangeChoiceText = (ev) => { this.props.onChangeField( ev.target.value , 'choiceText')}
        this.submit = (ev) => {
            ev.preventDefault();
            console.log(this.props.id);
            console.log(this.props.choiceText)
            this.props.onSubmit(agent.Choices.create(this.props.id , {title : this.props.choiceText}));
        }
    }
    

    render(){
        return (
            <div>
                { this.props.edit ? null : <button onClick={this.props.onEditOpen}>+</button>}
                { !this.props.edit ? null :<fieldset>
                    <input type="text" value={this.props.choiceText} onChange={this.onChangeChoiceText}/>
                    <button onClick={this.submit}>Add</button>
                    <button onClick={this.props.onEditClose}>X</button>
                </fieldset> }
            </div>
        )
    }
}



export default connect(mapStateToProps , mapDispatchToProps)(PollChoiceEdit);