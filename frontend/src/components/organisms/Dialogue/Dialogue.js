import React, { Component } from 'react';
import styles from './Dialogue.scss';
import FormField from '../../molecules/FormField/FormField';
// import StepsContainer from "../../molecules/steps/StepsContainer.jsx";
import QuestionFieldContainer from '../../../containers/QuestionFieldContainer/QuestionFieldContainer';
import AnswerFieldContainer from '../../../containers/AnswerFieldContainer/AnswerFieldContainer';
import Btn from '../../atoms/Btn/Btn';
import SubmitBtn from '../../atoms/SubmitBtn/SubmitBtn';
// import SubmitFormBtnContainer from "../../molecules/submitFormBtn/SubmitFormBtnContainer.jsx";

export default class Dialogue extends Component {
  componentDidMount() {}

  render() {
    const obj = this.props.answer_list;
    const answerList = Object.keys(obj).map((key, index) =>
      <div key={index}>
        <AnswerFieldContainer answer={obj[key]} actions={this.props.actions} />
      </div>
    );

    return (
      <div>
        <h1>ダイアログ作成</h1>
        {/*<StepsContainer />*/}
        <div className={styles.formWrap}>
          <FormField>
            <QuestionFieldContainer actions={this.props.actions} />
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
        <div data-gridlex="grid-center">
          <div data-gridlex="col-12_xs-4_sm-3">
            <SubmitBtn
              text="create"
              tone="color"
              onClick={() => this.props.actions.createDialogueTemp(this.props.temp.question_text,this.props.temp.parent_id,this.props.answer_list,this.props.keyword_list)} />
          </div>
        </div>
      </div>
    );
  }
}
