import React, { Component } from 'react';
import styles from './request.scss';
import FormField from '../../molecules/formField/formField.jsx';
import FormTitleWithRequire from '../../molecules/formTitleWithRequire/formTitleWithRequire.jsx';
import NameContainer from "../../molecules/name/NameContainer.jsx";
import KanaContainer from "../../molecules/kana/KanaContainer.jsx";
import GenderContainer from "../../molecules/gender/GenderContainer.jsx";
import ParentNameContainer from "../../molecules/parentName/ParentNameContainer.jsx";
import ZipContainer from "../../molecules/zip/ZipContainer.jsx";
import AddressContainer from "../../molecules/address/AddressContainer.jsx";
import BuildingContainer from "../../molecules/building/BuildingContainer.jsx";
import TelContainer from "../../molecules/tel/TelContainer.jsx";
import MailContainer from "../../molecules/mail/MailContainer.jsx";
import SchoolNameContainer from "../../molecules/schoolName/SchoolNameContainer.jsx";
import SchoolYearContainer from "../../molecules/schoolYear/SchoolYearContainer.jsx";
import AgeContainer from "../../molecules/age/AgeContainer.jsx";
import ContactFieldContainer from "../../molecules/contactField/ContactFieldContainer.jsx";
import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";
import StepsContainer from "../../molecules/steps/StepsContainer.jsx";

export default class Request extends Component {
  componentDidMount() {
    this.props.actions.requireZip(true);
    this.props.actions.requireSchoolYear(true);
    this.props.actions.defaultRequiredAddress(true);
    this.props.actions.defaultRequiredTel(true);
    this.props.actions.defaultRequiredMail(false);
    this.props.actions.setAddressMarks(['番地も忘れずに入力してください。']);
    this.props.actions.setTelMarks(['日中の連絡がとれる電話番号をご記入ください。']);
    this.props.actions.setMailMarks(['迷惑メールの対策などでドメイン指定を行っている場合、メールが受信できない場合があります。「@risshisha.ed.jp」を受信できるようにしてください。']);
  }

  render() {
    return (
      <div>
        <h1 className="title-primary">入学案内書・資料お申込み</h1>
        <a href="/privacy/" target="_blank">プライバシーポリシー（個人情報について）</a>
        <p>入学案内書、資料は全て無料で進呈いたします。</p>
        <div className={styles.imgWrap}>
          <img src="/img/form/pamphlet.jpg" width="1200" height="500" alt="入学案内書" />
        </div>
        <StepsContainer />
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
            <ContactFieldContainer />
          </FormField>
        </div>
        <SubmitFormBtnContainer />
      </div>
    );
  }
}

