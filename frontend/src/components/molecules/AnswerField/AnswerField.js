import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import KeywordFieldContainer from '../../../containers/KeywordFieldContainer/KeywordFieldContainer';
// import KeywordField from '../../molecules/KeywordField/KeywordField';
import Btn from "../../atoms/Btn/Btn";

export default class AnswerField extends Component {
  render() {
    const obj = this.props.keyword_list;
    const keywordList = Object.keys(obj).map((key, index) =>
      <div key={index}>
        <KeywordFieldContainer idx={index} answer_idx={this.props.idx} keywords={obj[key]} actions={this.props.actions} />
      </div>
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Textarea
              label={this.props.label}
              value={this.props.answers.answer_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputAnswerText(e.target.value, this.props.idx)} />
            <div data-gridlex="grid-noGutter-middle">
              <div data-gridlex="col">
                {keywordList}
              </div>
              <div data-gridlex="col-2">
                <Btn
                  text="追加"
                  tone="dark"
                  onClick={() => this.props.actions.addKeyword(this.props.idx)} />
              </div>
            </div>
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="削除"
              tone="light"
              onClick={() => this.props.actions.deleteAnswer(this.props.idx)} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
