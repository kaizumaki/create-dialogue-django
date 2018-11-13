import React, { Component } from 'react';
import styles from './eventTitle.scss';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon.js';
import Attention from '../../atoms/Attention/Attention.js';
import Require from '../../atoms/Require/Require.js';
import FormTitle from '../../atoms/formTitle/formTitle.jsx';

export default class EventTitle extends Component {
  render() {
    return (
      <div className={styles.formTitle}>
        <FormTitle text={this.props.title} />
        <Require />
        <ValidateIcon isValid={this.props.isValid} />
        {(!this.props.isValid && this.props.isShowError) && <Attention text={this.props.errorMsg[this.props.errorCode]} />}
      </div>
    );
  }
}

