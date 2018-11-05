import React, { Component } from 'react';
import styles from './Label.scss';

class Label extends Component {
  render() {
    return (
      <label htmlFor={this.props.label} className={styles.label}>{this.props.text}</label>
    );
  }
}

export default Label;
