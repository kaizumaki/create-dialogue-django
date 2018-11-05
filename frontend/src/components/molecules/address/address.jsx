import React, { Component } from 'react';
import FormItem from '../FormItem/FormItem.js';
import Field from '../../atoms/Field/Field.js';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon.js';
import Marks from '../../atoms/Marks/Marks.js';
import Attention from '../../atoms/Attention/Attention.js';

export default class Address extends Component {
  render() {
    const markList = this.props.marks.map((item, index) =>
      <Marks key={index} text={item} />
    );

    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter-middle">
          <div data-gridlex="col">
            <Field
              type="text"
              label={this.props.label}
              placeholder="例：東京都墨田区錦糸1-2-1"
              value={this.props.value}
              maxLength={100}
              onChange={(e) => this.props.actions.inputAddress(e.target.value)}
              isRequired={this.props.isRequired} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {markList}
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

