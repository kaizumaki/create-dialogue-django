import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import NumberField from '../../atoms/NumberField/NumberField';
import Label from '../../atoms/Label/Label';

export default class QuestionField extends Component {
  render() {
    return (
      <FormItem
        label="question"
        titleText={this.props.title_question}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Textarea
              label="question"
              value={this.props.question_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputQuestionText(e.target.value)} />
            <Label
              label="parent_id"
              text={this.props.title_parent_id} />
            <NumberField
              label="parent_id"
              value={this.props.parent_id}
              onChange={(e) => this.props.actions.inputQuestionParentId(e.target.value)} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
