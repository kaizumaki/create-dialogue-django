import React, { Component } from 'react';
import styles from './gakusetsuDate.scss';
import CheckboxDate from '../../atoms/checkboxDate/checkboxDate.jsx';

export default class GakusetsuDate extends Component {
  constructor(props) {
    super(props);
    this.isChecked = this.isChecked.bind(this);
  }

  isChecked(id) {
    const searchDateIndex = this.props.value.findIndex((elm) => {
      return elm.id === id;
    });
    return searchDateIndex !== -1;
  }

  componentDidMount() {
    this.props.actions.initDateGakusetsu();
  }

  render() {
    const gakusetsuItems = this.props.gakusetsu_date.map((item, index) =>
      <li key={index} data-gridlex="col-12_xs-6_sm-3">
        <CheckboxDate
          value={item.id}
          date={item.date}
          isChecked={this.isChecked(item.id)}
          onChange={(id, date) => this.props.gakusetsuActions.inputGakusetsu(item.id, item.date)} />
      </li>
    );

    return (
      <div>
        <ul className={styles.checkboxList} data-gridlex="grid">
          {gakusetsuItems}
        </ul>
        <hr className="line-default" />
        <ul className="list-default">
          <li>各回とも10：00から開催いたします</li>
          <li>保護者の方のみでも参加できます</li>
          <li>場所：アルカタワーズ校舎　<a href="/access" target="_blank"><i className={styles.icon}>&#xf3c5;</i>アクセスガイド</a></li>
        </ul>
      </div>
    );
  }
}
