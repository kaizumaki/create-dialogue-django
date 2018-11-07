import React, { Component } from 'react';
import styles from './Dialogue.scss';
import FormField from '../../molecules/FormField/FormField';
// import StepsContainer from "../../molecules/steps/StepsContainer.jsx";
import QuestionField from '../../molecules/QuestionField/QuestionField';
import AnswerFieldContainer from '../../../containers/AnswerFieldContainer/AnswerFieldContainer';
import AnswerField from '../../molecules/AnswerField/AnswerField';
// import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";

export default class Dialogue extends Component {
  componentDidMount() {}

  render() {
    const answerList = this.props.answer_list.map((item, index) =>
      <div key={index}>
        <AnswerField idx={index} answer_list={item} keywords={item.keywords} actions={this.props.actions} />
      </div>
    );

    return (
      <div>
        <h1 className="title-primary">お問い合せ・ご質問</h1>
        {/*<StepsContainer />*/}
        <div className={styles.formWrap}>
          <FormField>
            <QuestionField temp={this.props.temp} actions={this.props.actions} />
            {answerList}
          </FormField>
        </div>
        {/*<SubmitFormBtnContainer />*/}
        <button type="button" onClick={() => this.props.actions.createDialogueTemp(this.props.temp)}>button</button>
      </div>
    );
  }
}
