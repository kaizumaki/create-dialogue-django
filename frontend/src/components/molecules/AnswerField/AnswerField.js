import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import KeywordFieldContainer from '../../../containers/KeywordFieldContainer/KeywordFieldContainer';
import Btn from "../../atoms/Btn/Btn";

export default class AnswerField extends Component {
  render() {
    const obj = this.props.keywords;
    const keywords = Object.keys(obj).map((key, index) =>
      <div key={index}>
        {this.props.answer.answer_temp_id === obj[key].answer_temp_id &&
        <KeywordFieldContainer idx={index} answer_idx={this.props.answer.answer_temp_id} keyword={obj[key]}
                               actions={this.props.actions} />}
      </div>
    );

    return (
      <FormItem
        label={"answer" + this.props.idx}
        titleText={this.props.title_answer + parseInt(this.props.idx + 1)}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noBottom">
          <div data-gridlex="col">
            <Textarea
              label={"answer" + this.props.idx}
              value={this.props.answer.answer_texts}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputAnswerText(e.target.value, this.props.idx)} />
            <div data-gridlex="grid-noBottom">
              <div data-gridlex="col">
                {keywords}
              </div>
              <div data-gridlex="col-2">
                <Btn
                  text="add"
                  tone="dark"
                  onClick={() => this.props.actions.addKeyword(this.props.idx, this.props.answer.answer_temp_id)} />
              </div>
            </div>
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="del"
              tone="light"
              onClick={() => this.props.actions.deleteAnswer(this.props.idx, this.props.answer.answer_temp_id)} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
