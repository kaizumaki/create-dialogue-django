import React, { Component } from 'react';
import styles from './confirmRequest.scss';
import ConfirmRequestListContainer from "./ConfirmRequestListContainer.jsx";
import SubmitConfirmBtnContainer from "../../molecules/submitConfirmBtn/SubmitConfirmBtnContainer.jsx";
import StepsContainer from "../../molecules/steps/StepsContainer.jsx";

class ConfirmRequest extends Component {
  render() {
    return (
      <div>
        <h1 className="title-primary">入力内容のご確認</h1>
        <StepsContainer />
        <p>以下の内容でよろしければ［送信する］ボタンを押してください。<br />修正される場合は［もどる］ボタンを押して、修正をお願いします。</p>
        <div className={styles.confirmWrap}>
          <ConfirmRequestListContainer />
        </div>
        <SubmitConfirmBtnContainer />
      </div>
    );
  }
}

export default ConfirmRequest;
