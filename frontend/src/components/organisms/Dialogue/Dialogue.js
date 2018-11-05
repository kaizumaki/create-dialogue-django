import React, { Component } from 'react';
import styles from './Dialogue.scss';
import FormField from '../../molecules/FormField/FormField';
// import StepsContainer from "../../molecules/steps/StepsContainer.jsx";
import QuestionFieldContainer from '../../../containers/QuestionFieldContainer/QuestionFieldContainer';
// import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";

export default class Dialogue extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <h1 className="title-primary">お問い合せ・ご質問</h1>
        {/*<StepsContainer />*/}
        <div className={styles.formWrap}>
          <FormField>
            <QuestionFieldContainer />
          </FormField>
        </div>
        {/*<SubmitFormBtnContainer />*/}
        <button type="button" onClick={() => this.props.actions.createQuestion(this.props.temp)}>button</button>
      </div>
    );
  }
}
