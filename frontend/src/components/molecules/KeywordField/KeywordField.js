import React, { Component } from 'react';
import Field from '../../atoms/Field/Field';
import NumberField from '../../atoms/NumberField/NumberField';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Btn from '../../atoms/Btn/Btn';
import Attention from '../../atoms/Attention/Attention';

export default class KeywordField extends Component {
  render() {
    return (
      <div>
        <div data-gridlex="grid-noGutter-middle">
          <div data-gridlex="col">
            <p>keyword</p>
            <Field
              type="text"
              label={this.props.label}
              value={this.props.keywords.word}
              onChange={(e) => this.props.actions.inputWord(e.target.value, this.props.idx, this.props.answer_idx)}
              isRequired={this.props.isRequired} />
          </div>
          <div data-gridlex="col">
            <p>weight</p>
            <NumberField
              label={this.props.label}
              value={this.props.keywords.weight}
              onChange={(e) => this.props.actions.inputWeight(e.target.value, this.props.idx, this.props.answer_idx)}
              isRequired={this.props.isRequired} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
          <div data-gridlex="col-2">
            <Btn
              text="削除"
              tone="light"
              onClick={() => this.props.actions.deleteKeyword(this.props.idx, this.props.answer_idx)} />
          </div>
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </div>
    );
  }
}

