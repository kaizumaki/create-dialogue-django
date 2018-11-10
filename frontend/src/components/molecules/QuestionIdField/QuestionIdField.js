import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import Field from '../../atoms/Field/Field';
import Btn from "../../atoms/Btn/Btn";

export default class QuestionIdField extends Component {
  render() {
    return (
      <FormItem
        label="question_id"
        titleText={this.props.title}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Field
              text="text"
              label="question_id"
              value={this.props.id}
              pattern="\d+(,\d{2})?"
              onChange={(e) => this.props.actions.inputQuestionId(e.target.value)} />
          </div>
          <div data-gridlex="col">
            <Btn
              text="set"
              tone="dark"
              onClick={() => this.props.actions.setDialogueState(this.props.id)} />
          </div>
        </div>
      </FormItem>
    );
  }
}
