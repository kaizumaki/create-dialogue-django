import React, { Component } from 'react';
import styles from './Marks.scss';

class Marks extends Component {
  render() {
    return (
      <p className={styles.marksText}>※ {this.props.text}</p>
    );
  }
}

export default Marks;
