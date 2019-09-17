import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  POLL_EDITOR_PAGE_LOADED,
  POLL_EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
  POLL_SUBMITTED,
} from '../constants/actionTypes';

const mapStateToProps = state => ({
  ...state.pollEdit
});

const mapDispatchToProps = dispatch => ({
  onLoad: payload =>
    dispatch({ type: POLL_EDITOR_PAGE_LOADED, payload }),
  onSubmit: payload =>
    dispatch({ type: POLL_SUBMITTED, payload }),
  onUnload: () =>
    dispatch({ type: POLL_EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

class PollEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      error: {},
    }


    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    
    this.submitForm = ev => {
      ev.preventDefault();

      const title = this.props.title;
      const description = this.props.description;
      
      const id = this.props.match.params.id 
      console.log(title)
      console.log(description)
      
      this.props.onSubmit(id ? agent.Polls.update({title , description}) : agent.Polls.create({title , description}));
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      if (nextProps.match.params.id) {
        return this.props.onLoad(agent.Polls.get(this.props.match.params.id));
      }
      this.props.onLoad(null);
    }
  }

  componentWillMount() {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      return this.props.onLoad(agent.Polls.get(id));
    }
    this.props.onLoad(null);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-xs-12">

              <ListErrors errors={this.props.errors}></ListErrors>

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Title"
                      value={this.props.title}
                      onChange={this.changeTitle} />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Description"
                      value={this.props.description}
                      onChange={this.changeDescription} />
                  </fieldset>
                  <button
                    className="btn btn-lg pull-xs-right btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}>
                    Publish Poll
                  </button>
                  

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PollEditor);
