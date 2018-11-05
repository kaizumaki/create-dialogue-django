import React, { Component } from 'react';
import styles from './event.scss';
import FormField from '../../molecules/formField/formField.jsx';
import Marks from '../../atoms/marks/marks.jsx';
import FormTitleWithRequire from '../../molecules/formTitleWithRequire/formTitleWithRequire.jsx';
import AddressContainer from "../../molecules/address/AddressContainer.jsx";
import SubmitFormBtnContainer from '../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx';
import EventTitleContainer from "../../molecules/eventTitle/EventTitleContainer.jsx";
import GakusetsuContainer from "../../molecules/gakusetsu/GakusetsuContainer.jsx";
import KengakuContainer from "../../molecules/kengaku/KengakuContainer.jsx";
import NameContainer from "../../molecules/name/NameContainer.jsx";
import KanaContainer from "../../molecules/kana/KanaContainer.jsx";
import GenderContainer from "../../molecules/gender/GenderContainer.jsx";
import ParentNameContainer from "../../molecules/parentName/ParentNameContainer.jsx";
import ZipContainer from "../../molecules/zip/ZipContainer.jsx";
import BuildingContainer from "../../molecules/building/BuildingContainer.jsx";
import TelContainer from "../../molecules/tel/TelContainer.jsx";
import MailContainer from "../../molecules/mail/MailContainer.jsx";
import SchoolNameContainer from "../../molecules/schoolName/SchoolNameContainer.jsx";
import SchoolYearContainer from "../../molecules/schoolYear/SchoolYearContainer.jsx";
import AgeContainer from "../../molecules/age/AgeContainer.jsx";
import ContactFieldContainer from "../../molecules/contactField/ContactFieldContainer.jsx";
import TaikenZemiContainer from "../../molecules/taikenZemi/taikenZemiContainer.jsx"
import StepsContainer from "../../molecules/steps/StepsContainer.jsx";

export default class Event extends Component {
  componentDidMount() {
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
        <h1 className="title-primary">学校説明会・体験ゼミ学習・入学相談・授業見学お申込み</h1>
        <a href="/privacy/" target="_blank">プライバシーポリシー（個人情報について）</a>
        <div className={styles.telWrap}>
          <dl>
            <dt>≪電話からのお申込みはこちらから≫</dt>
            <dd>立志舎高校　事務局学事課<br />Tel: <a href="tel:0356081033">03-5608-1033</a></dd>
          </dl>
        </div>
        <StepsContainer />
        <div className={styles.formWrap}>
          <FormField>
            <EventTitleContainer />
            <div className={styles.fieldsetWrap}>
              <Marks text="「学校説明会」と「体験ゼミ学習」が同じ日の場合はどちらかの参加になりますので、希望のイベントの方にチェックを入れてください。" />
              <GakusetsuContainer />
              <TaikenZemiContainer />
              <KengakuContainer />
            </div>
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
            <ContactFieldContainer />
          </FormField>
        </div>
        <SubmitFormBtnContainer />
      </div>
    );
  }
}

