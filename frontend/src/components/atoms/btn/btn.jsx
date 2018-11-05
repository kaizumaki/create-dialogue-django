import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './btn.scss';

class Btn extends Component {
  render() {
    return (
      <button
        type="button"
        className={styles[this.props.tone]}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

Btn.propTypes = {
  text: PropTypes.string,
  tone: PropTypes.string,
  onClick: PropTypes.func
};

export default Btn;
