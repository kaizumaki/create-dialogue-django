import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem.js';
import Field from '../../atoms/Field/Field.js';
import Marks from '../../atoms/Marks/Marks.js';
import Attention from '../../atoms/Attention/Attention.js';

export default class Building extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}>
        <Field
          type="text"
          label={this.props.label}
          placeholder="例：立志コーポ101号室"
          value={this.props.value}
          maxLength={100}
          onChange={(e) => this.props.actions.inputBuilding(e.target.value)}
          isRequired={this.props.isRequired} />
        <Marks text="建物名、部屋番号などがあれば忘れずに入力してください。" />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

