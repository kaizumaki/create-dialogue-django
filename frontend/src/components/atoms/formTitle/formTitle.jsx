import React, { Component } from 'react';
import styles from './formTitle.scss';

class FormTitle extends Component {
  render() {
    return (
      <h2 className={styles.formTitle}>{this.props.text}</h2>
    );
  }
}

export default FormTitle;
