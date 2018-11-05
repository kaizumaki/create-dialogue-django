import React, { Component } from 'react';
import styles from './contactField.scss';
import FormItem from '../FormItem/FormItem';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon';
import Marks from '../../atoms/Marks/Marks';
import Attention from '../../atoms/Attention/Attention';
import Textarea from '../../atoms/Textarea/Textarea';

export default class ContactField extends Component {
  render() {
    return (
      <FormItem
        label={this.props.label}
        titleText={this.props.title}
        isRequired={this.props.isRequired}>
        <div data-gridlex="grid-noGutter">
          <div data-gridlex="col">
            <Textarea
              label={this.props.label}
              value={this.props.value}
              onChange={(e) => this.props.actions.inputContact(e.target.value)} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
        <Marks text={this.props.replyToTitle} />
      </FormItem>
    );
  }
}
