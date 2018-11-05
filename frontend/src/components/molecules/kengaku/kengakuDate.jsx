import React, { Component } from 'react';
import styles from './kengakuDate.scss';
import flatpickr from 'flatpickr';
import '!style-loader!css-loader!flatpickr/dist/themes/material_blue.css';
import { Japanese } from 'flatpickr/dist/l10n/ja';
import koyomi from 'koyomi';
import Marks from '../../atoms/Marks/Marks.js';
import Label from '../../atoms/Label/Label.js';
import Btn from '../../atoms/btn/btn.jsx';
import ValidateIcon from '../../atoms/ValidateIcon/ValidateIcon.js';
import Attention from '../../atoms/Attention/Attention.js';

class KengakuDate extends Component {
  constructor(props) {
    super(props);
    flatpickr.localize(Japanese);
  }

  componentDidMount() {
    fetch('/api/v1/kengaku')
      .then((result) => {
        return result.json();
      })
      .then((json) => {
        flatpickr('#kengaku-date', {
          locale: {
            firstDayOfWeek: 1
          },
          minDate: "today",
          disable: [
            (date) => {
              return (
                date.getDay() === 0 ||
                koyomi.format(date, 'ff>1') === '祝' ||
                json.findIndex((elm) => {return elm.date === koyomi.format(date, 'YYYY-MM-DD');}) !== -1
              );
            }
          ],
          disableMobile: 'true',
          dateFormat: 'n月j日(D)',
          onChange: (selectedDates, dateStr, instance) => {
            this.props.actions.inputKengakuDate(koyomi.format(selectedDates[0], 'YYYY-MM-DD'));
          }
        });
      })
      .catch((error) => {
        return { error }
      });
  }

  render() {
    const kengakuSelect = this.props.ken.kengakuTimeList.map((item, index) =>
      <option
        key={index}
        value={item}>
        {item}-
      </option>
    );

    return (
      <div>
        <Marks text="日曜日・祝日・事務局休暇（夏季・冬季）を除く毎日実施しております" />
        <div className={styles.inputGroup}>
          <Label label="kengaku-date" text="参加希望日" />
          <input
            id="kengaku-date"
            value={this.props.ken.formattedDate}
            onChange={(e) => console.log(e)}
            className={styles.inputField} />
          <Btn tone="dark" text="削除" onClick={() => this.props.actions.deleteKengakuDate()} />
        </div>
        <div className={styles.inputGroup}>
          <Label label="kengaku-time" text="ご希望の時間帯（9：30-16：30）" />
          <select
            id="kengaku-time"
            value={this.props.ken.valueTime}
            className={styles.select}
            onChange={(e) => this.props.actions.inputKengakuTime(e.target.value)}>
            <option value="">--お選びください--</option>
            {kengakuSelect}
          </select>
          {this.props.ken.isRequiredTime && <ValidateIcon isValid={this.props.ken.isValidTime} />}
          {(this.props.ken.isRequiredTime && !this.props.ken.isValidTime && this.props.ken.isShowError) && <Attention text={this.props.ken.errorMsg[this.props.ken.errorCode]} />}
        </div>
        <hr className="line-default" />
        <ul className="list-default">
          <li>保護者の方のみでも参加できます</li>
          <li>場所：立志舎高等学校　<a href="/access" target="_blank"><i className={styles.icon}>&#xf3c5;</i>アクセスガイド</a></li>
        </ul>
      </div>
    );
  }
}

export default KengakuDate;
