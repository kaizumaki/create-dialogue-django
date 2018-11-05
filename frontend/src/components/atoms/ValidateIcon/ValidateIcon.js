import React, { Component } from 'react';
import styles from './ValidateIcon.scss';

class ValidateIcon extends Component {
  render() {
    return (
      <div className={styles.validateIcon}>
        {this.props.isValid && <i className={styles.green}>&#xf058;</i>}
        {!this.props.isValid && <i className={styles.red}>&#xf06a;</i>}
      </div>
    );
  }
}

export default ValidateIcon;
