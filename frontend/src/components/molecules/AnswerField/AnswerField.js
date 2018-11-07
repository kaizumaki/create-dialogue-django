import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';
import KeywordField from '../../molecules/KeywordField/KeywordField';
import Btn from "../../atoms/Btn/Btn";

export default class AnswerField extends Component {
  render() {
    const keywordList = this.props.keywords.map((item, index) =>
      <div key={index}>
        <KeywordField idx={index} answer_idx={this.props.idx} keywords={item} actions={this.props.actions} />
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
              value={this.props.answer_list.answer_text}
              isRequired={this.props.isRequired}
              onChange={(e) => this.props.actions.inputAnswerText(e.target.value, parseInt(this.props.idx))} />
            {keywordList}
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="追加"
              tone="dark"
              onClick={() => this.props.actions.addAnswer()} />
            <Btn
              text="削除"
              tone="light"
              onClick={() => this.props.actions.deleteAnswer(parseInt(this.props.idx))} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}
