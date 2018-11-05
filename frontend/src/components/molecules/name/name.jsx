import React, { Component } from 'react';
import FormItem from '../formItem/formItem.jsx';
import Field from '../../atoms/field/field.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Attention from '../../atoms/attention/attention.jsx';

export default class Name extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={true}>
        <div data-gridlex="grid-noGutter-middle">
          <div data-gridlex="col">
            <Field
              type="text"
              label={this.props.label}
              placeholder="例：立志&emsp;太郎"
              value={this.props.value}
              autocomplete="name"
              maxLength={50}
              onChange={(e) => this.props.actions.inputName(e.target.value)}
              isRequired={true} />
          </div>
          <div className="align-center" data-gridlex="col-1">
            <ValidateIcon isValid={this.props.isValid} />
          </div>
        </div>
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </FormItem>
    );
  }
}

