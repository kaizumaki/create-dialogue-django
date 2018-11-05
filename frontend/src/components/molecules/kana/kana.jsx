import React, { Component } from 'react';

import FormItem from '../FormItem/FormItem.js';
import Field from '../../atoms/Field/Field.js';
import Attention from '../../atoms/Attention/Attention.js';

export default class Kana extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <Field
          type="text"
          label={this.props.label}
          placeholder="例：りっし&emsp;たろう"
          value={this.props.value}
          maxLength={50}
          onChange={(e) => this.props.actions.inputKana(e.target.value)} />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

