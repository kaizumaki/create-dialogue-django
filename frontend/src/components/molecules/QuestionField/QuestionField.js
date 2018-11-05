import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Marks from '../../atoms/Marks/Marks';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import Field from '../../atoms/Field/Field';

export default class QuestionField extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Textarea
              label={this.props.label}
              value={this.props.temp.question_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputQuestionText(e.target.value)} />
            <p>parent_id</p>
            <Field
              type="number"
              value={this.props.temp.parent_id}
              onChange={(e) => this.props.actions.inputQuestionParentId(e.target.value)} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
