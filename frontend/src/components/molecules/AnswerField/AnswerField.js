import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import KeywordFieldContainer from '../../../containers/KeywordFieldContainer/KeywordFieldContainer';
import Btn from "../../atoms/Btn/Btn";

export default class AnswerField extends Component {
  render() {
    const obj = this.props.keyword_list;
    const keywordList = Object.keys(obj).map((key, index) =>
      <div key={index}>
        {this.props.answer.answer_temp_id === obj[key].answer_temp_id && <KeywordFieldContainer answer_idx={this.props.answer.answer_temp_id} keyword={obj[key]} actions={this.props.actions} />}
      </div>
    );

    return (
      <FormItem
        label={"answer" + this.props.answer.answer_temp_id}
        titleText={this.props.title_answer + parseInt(this.props.answer.answer_temp_id + 1)}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Textarea
              label={"answer" + this.props.answer.answer_temp_id}
              value={this.props.answer.answer_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputAnswerText(e.target.value, this.props.answer.answer_temp_id)} />
            <div data-gridlex="grid-noGutter">
              <div data-gridlex="col">
                {keywordList}
              </div>
              <div data-gridlex="col-2">
                <Btn
                  text="追加"
                  tone="dark"
                  onClick={() => this.props.actions.addKeyword(this.props.answer.answer_temp_id)} />
              </div>
            </div>
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="削除"
              tone="light"
              onClick={() => this.props.actions.deleteAnswer(this.props.answer.answer_temp_id)} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
