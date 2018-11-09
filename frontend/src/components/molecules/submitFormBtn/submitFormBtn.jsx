import React, { Component } from 'react';
import SubmitBtn from '../../atoms/SubmitBtn/SubmitBtn.js';

export default class SubmitFormBtn extends Component {
  render() {
    return (
      <div data-gridlex="grid-center">
        <div data-gridlex="col-12_xs-4_sm-3">
          <SubmitBtn
            text="確認画面へ"
            tone="color"
            onClick={() => this.props.actions.setConfirmStep()} />
        </div>
      </div>
    );
  }
}

