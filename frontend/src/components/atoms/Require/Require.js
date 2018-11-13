import React, { Component } from 'react';
import styles from './Require.scss';

class Require extends Component {
  render() {
    return (
      <span className={styles.requireText}>必須</span>
    );
  }
}

export default Require;
