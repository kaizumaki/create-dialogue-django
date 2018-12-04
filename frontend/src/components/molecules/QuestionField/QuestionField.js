import React, { Component } from 'react';
import styles from './QuestionField.scss';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';

export default class QuestionField extends Component {
  render() {
    const optionList = this.props.exists_answers.map((item, index) =>
      <option key={index} value={item.answer_id}>{item.answer_texts.join(',')}</option>
    );

    return (
      <FormItem
        label="question"
        titleText={this.props.title_question}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col-11">
            <Textarea
              label="question"
              value={this.props.question_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputQuestionText(e.target.value)} />
            <span className="font-bold">{this.props.title_parent_answer_id} : </span>
            <select
              className={styles.selectBox}
              value={this.props.parent_answer_id}
              onChange={(e) => this.props.actions.inputParentAnswerId(e.target.value)}>
              <option value="-1">なし</option>
              {optionList}
            </select>
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
