import React, { Component } from 'react';
import styles from './require.scss';

class Require extends Component {
  render() {
    return (
      <span className={styles.requireText}>必須</span>
    );
  }
}

export default Require;
