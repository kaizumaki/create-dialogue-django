import React, { Component } from 'react';
import styles from './thanks.scss';
import StepsContainer from '../../molecules/steps/StepsContainer.jsx';

export default class Thanks extends Component {
  render() {
    return (
      <div>
        <h1 className="title-primary">送信完了</h1>
        <StepsContainer state="thanks" />
        {this.props.isEvent && <p>お申込みありがとうございました。<br />当日は会場へ直接お越しください。</p>}
        {this.props.isContact && <p>お問い合せいただきありがとうございました。<br />担当者よりお返事を差し上げます。</p>}
        {this.props.isRequest && <p>お申込みありがとうございました。<br />資料を至急お送りいたします。</p>}
        <div className={styles.linkWrap}>
          <a href="/">立志舎高等学校トップページへ</a>
        </div>
        <img src="/img/common/thanks.jpg" width="1200" height="500" alt="" />
      </div>
    );
  }
}
