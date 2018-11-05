import React, { Component } from 'react';
import styles from './contact.scss';
import FormField from '../../molecules/FormField/FormField.js';
import StepsContainer from "../../molecules/steps/StepsContainer.jsx";
import FormTitleWithRequire from '../../molecules/formTitleWithRequire/formTitleWithRequire.jsx';
import ContactFieldContainer from "../../molecules/contactField/ContactFieldContainer.jsx";
import NameContainer from "../../molecules/name/NameContainer.jsx";
import KanaContainer from "../../molecules/kana/KanaContainer.jsx";
import GenderContainer from "../../molecules/gender/GenderContainer.jsx";
import ParentNameContainer from "../../molecules/parentName/ParentNameContainer.jsx";
import ZipContainer from "../../molecules/zip/ZipContainer.jsx";
import AddressContainer from "../../molecules/address/AddressContainer.jsx";
import BuildingContainer from '../../molecules/building/BuildingContainer.jsx';
import TelContainer from "../../molecules/tel/TelContainer.jsx";
import MailContainer from "../../molecules/mail/MailContainer.jsx";
import SchoolNameContainer from "../../molecules/schoolName/SchoolNameContainer.jsx";
import SchoolYearContainer from "../../molecules/schoolYear/SchoolYearContainer.jsx";
import AgeContainer from '../../molecules/age/AgeContainer.jsx';
import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";

export default class Contact extends Component {
  componentDidMount() {
    this.props.actions.requireContact(true);
    this.props.actions.defaultRequiredAddress(false);
    this.props.actions.defaultRequiredTel(true);
    this.props.actions.defaultRequiredMail(false);
    this.props.actions.setAddressMarks(['番地も忘れずに入力してください。']);
    this.props.actions.setTelMarks(['日中の連絡がとれる電話番号をご記入ください。']);
    this.props.actions.setMailMarks(['迷惑メールの対策などでドメイン指定を行っている場合、メールが受信できない場合があります。「@risshisha.ed.jp」を受信できるようにしてください。']);
  }

  render() {
    return (
      <div>
        <h1 className="title-primary">お問い合せ・ご質問</h1>
        <a href="/privacy/" target="_blank">プライバシーポリシー（個人情報について）</a>
        <p>メール、手紙での返信にはお時間がかかる場合があります。お急ぎの場合はお電話でお問い合せください。<br />また、夜間にいただいたお問い合せの返信は翌日以降になります。</p>
        <div className={styles.telWrap}>
          <dl>
            <dt>≪電話からのお問い合せ・ご質問はこちらから≫</dt>
            <dd>立志舎高校　事務局学事課<br /><span className={styles.tel}>Tel: <a href="tel:0356081033">03-5608-1033</a>（代）</span></dd>
            <dd>立志舎高校　入学相談係<br /><span className={styles.tel}>Tel: <a href="tel:0356081068">03-5608-1068</a>（直）</span></dd>
          </dl>
        </div>
        <StepsContainer />
        <div className={styles.formWrap}>
          <FormField>
            <FormTitleWithRequire text="お問い合せ内容" />
            <ContactFieldContainer />
          </FormField>
        </div>
        <div className={styles.formWrap}>
          <FormField>
            <FormTitleWithRequire text="個人情報" />
            <NameContainer />
            <KanaContainer />
            <GenderContainer />
            <ParentNameContainer />
            <ZipContainer />
            <AddressContainer />
            <BuildingContainer />
            <TelContainer />
            <MailContainer />
            <SchoolNameContainer />
            <SchoolYearContainer />
            <AgeContainer />
          </FormField>
        </div>
        <SubmitFormBtnContainer />
      </div>
    );
  }
}
