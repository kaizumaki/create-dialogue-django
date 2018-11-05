import React, { Component } from 'react';
import styles from './Attention.scss';

class Attention extends Component {
  render() {
    return (
      <p className={this.props.text ? styles.attentionText : ''}>{this.props.text || ''}</p>
    );
  }
}

export default Attention;
