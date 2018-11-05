import React, { Component } from 'react';
import styles from './confirmContact.scss';
import ConfirmContactListContainer from "./ConfirmContactListContainer.jsx";
import SubmitConfirmBtnContainer from "../../molecules/submitConfirmBtn/SubmitConfirmBtnContainer.jsx";
import StepsContainer from "../../molecules/steps/StepsContainer.jsx";

class ConfirmContact extends Component {
  render() {
    return (
      <div>
        <h1 className="title-primary">入力内容のご確認</h1>
        <StepsContainer />
        <p>以下の内容でよろしければ［送信する］ボタンを押してください。<br />修正される場合は［もどる］ボタンを押して、修正をお願いします。</p>
        <div className={styles.confirmWrap}>
          <ConfirmContactListContainer />
        </div>
        <SubmitConfirmBtnContainer />
      </div>
    );
  }
}

export default ConfirmContact;
