import React, { Component } from 'react';
import styles from './Dialogue.scss';
import FormField from '../../molecules/FormField/FormField';
// import StepsContainer from "../../molecules/steps/StepsContainer.jsx";
import QuestionField from '../../molecules/QuestionField/QuestionField';
import AnswerFieldContainer from '../../../containers/AnswerFieldContainer/AnswerFieldContainer';
// import AnswerField from '../../molecules/AnswerField/AnswerField';
import Btn from "../../atoms/Btn/Btn";
// import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";

export default class Dialogue extends Component {
  componentDidMount() {}

  render() {
    const obj = this.props.answer_list;
    const answerList = Object.keys(obj).map((key, index) =>
      <div key={index}>
        <AnswerFieldContainer idx={index} answers={obj[key]} actions={this.props.actions} />
      </div>
    );

    return (
      <div>
        <h1>ダイアログ作成</h1>
        {/*<StepsContainer />*/}
        <div className={styles.formWrap}>
          <FormField>
            <QuestionField temp={this.props.temp} actions={this.props.actions} />
            <div data-gridlex="grid-noGutter">
              <div data-gridlex="col">
               {answerList}
              </div>
              <div data-gridlex="col-2">
                <Btn
                  text="追加"
                  tone="dark"
                  onClick={() => this.props.actions.addAnswer()} />
              </div>
            </div>
          </FormField>
        </div>
        {/*<SubmitFormBtnContainer />*/}
        <button type="button" onClick={() => this.props.actions.createDialogueTemp(this.props.temp.question_text,this.props.temp.parent_id,this.props.answer_list,this.props.keyword_list)}>button</button>
      </div>
    );
  }
}
