import React, { Component } from 'react';
import styles from './step.scss';

class Step extends Component {
  render() {
    return (
      <span className={this.props.state ? styles[this.props.state] : styles.step}>{this.props.text}</span>
    );
  }
}

export default Step;
