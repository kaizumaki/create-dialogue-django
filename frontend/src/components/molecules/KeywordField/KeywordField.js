import React, { Component } from 'react';
import Field from '../../atoms/Field/Field';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Btn from '../../atoms/Btn/Btn';
import Attention from '../../atoms/Attention/Attention';
import Label from '../../atoms/Label/Label';

export default class KeywordField extends Component {
  render() {
    return (
      <div>
        <div data-gridlex="grid-noBottom-middle">
          <div data-gridlex="col">
            <Label
              label={"keyword" + this.props.idx}
              text={this.props.title_word} />
            <Field
              type="text"
              label={"keyword" + this.props.idx}
              value={this.props.keyword.word}
              onChange={(e) => this.props.actions.inputWord(e.target.value, this.props.idx, this.props.answer_idx)}
              isRequired={this.props.isRequired} />
          </div>
          <div data-gridlex="col">
            <Label
              label={"weight" + this.props.idx}
              text={this.props.title_weight} />
            <Field
              type="text"
              label={"weight" + this.props.idx}
              value={this.props.keyword.weight || 0}
              pattern="[0-9]+(\.[0-9]{0,2})?"
              onChange={(e) => this.props.actions.inputWeight(e.target.value, this.props.idx, this.props.answer_idx)}
              isRequired={this.props.isRequired} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="del"
              tone="light"
              onClick={() => this.props.actions.deleteKeyword(this.props.keyword.keyword_temp_id, this.props.answer_idx)} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </div>
    );
  }
}
