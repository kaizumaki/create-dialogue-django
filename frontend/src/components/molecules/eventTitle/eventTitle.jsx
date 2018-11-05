import React, { Component } from 'react';
import styles from './eventTitle.scss';
import ValidateIcon from '../../atoms/validateIcon/validateIcon.jsx';
import Attention from '../../atoms/attention/attention.jsx';
import Require from '../../atoms/require/require.jsx';
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

