import React, { Component } from 'react';
import styles from './contactField.scss';
import FormItem from '../formItem/formItem.jsx';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import Attention from '../../atoms/attention/attention.jsx';
import Textarea from '../../atoms/textarea/textarea.jsx';
import Radio from '../../atoms/radio/radio.jsx';

export default class ContactField extends Component {
  render() {
    const radioItems = this.props.replyToList.map((item, index) =>
      <li key={index}>
        <Radio
          name="replyTo"
          text={item}
          value={item}
          isChecked={this.props.replyTo === item}
          isDisabled={!this.props.needReply}
          onChange={() => this.props.actions.inputReplyTo(item)} />
      </li>
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
              value={this.props.value}
              onChange={(e) => this.props.actions.inputContact(e.target.value)} />
          </div>
          {this.props.isRequired && <div className="align-center" data-gridlex="col-1"><ValidateIcon isValid={this.props.isValid} /></div>}
        </div>
        {(this.props.isRequired && !this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
        <Marks text={this.props.replyToTitle} />
        <ul className={styles.radioList}>
          {radioItems}
        </ul>
      </FormItem>
    );
  }
}
