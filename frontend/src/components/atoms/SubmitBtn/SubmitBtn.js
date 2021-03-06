import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './SubmitBtn.scss';

class SubmitBtn extends Component {
  render() {
    return (
      <button
        type="button"
        className={this.props.tone ? styles[this.props.tone] : styles.color1}
        disabled={this.props.isDisabled}
        onClick={this.props.onClick}>
        {this.props.text}
      </button>
    );
  }
}

SubmitBtn.propTypes = {
  text: PropTypes.string,
  tone: PropTypes.string,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default SubmitBtn;
