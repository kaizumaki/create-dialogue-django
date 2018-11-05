import React, { Component } from 'react';
import styles from './marks.scss';

class Marks extends Component {
  render() {
    return (
      <p className={styles.marksText}>※ {this.props.text}</p>
    );
  }
}

export default Marks;
