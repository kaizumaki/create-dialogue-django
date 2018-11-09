import React, { Component } from 'react';
import styles from './submitConfirmBtn.scss';
import PrivacyPolicy from '../../atoms/privacyPolicy/privacyPolicy.jsx';
import SubmitBtn from '../../atoms/SubmitBtn/SubmitBtn.js';

export default class SubmitConfirmBtn extends Component {
  render() {
    return (
      <div>
        <div className={styles.privacyPolicy}>
          <PrivacyPolicy />
        </div>
        <div className={styles.reverse} data-gridlex="grid-center">
          <div data-gridlex="col-12_xs-4_sm-3">
            <SubmitBtn
              text="送信する"
              tone="color"
              isDisabled={this.props.isDisabled}
              onClick={() => this.props.actions.setSendingStep()} />
          </div>
          <div data-gridlex="col-12_xs-4_sm-3">
            <SubmitBtn
              text="もどる"
              tone="gray"
              isDisabled={this.props.isDisabled}
              onClick={() => this.props.actions.setInputStep()} />
          </div>
        </div>
      </div>
    );
  }
}
