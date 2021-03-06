import React, { Component } from 'react';
import styles from './Dialogue.scss';
import FormField from '../../molecules/FormField/FormField';
import QuestionIdField from '../../molecules/QuestionIdField/QuestionIdField';
import QuestionFieldContainer from '../../../containers/QuestionFieldContainer/QuestionFieldContainer';
import AnswerFieldContainer from '../../../containers/AnswerFieldContainer/AnswerFieldContainer';
import Btn from '../../atoms/Btn/Btn';
import SubmitBtn from '../../atoms/SubmitBtn/SubmitBtn';

export default class Dialogue extends Component {
  componentDidMount() {
    this.props.actions.fetchAnswers();
  }

  render() {
    const obj = this.props.answer_list;
    const answerList = Object.keys(obj).map((key, index) =>
      <div key={index}>
        <AnswerFieldContainer idx={index} answer={obj[key]} actions={this.props.actions} />
      </div>
    );

    return (
      <div>
        <h1>ダイアログ作成</h1>
        <div className={styles.formWrap}>
          <FormField>
            <QuestionIdField title={this.props.title_question_id} id={this.props.question_id} actions={this.props.actions} />
          </FormField>
        </div>
        <div className={styles.formWrap}>
          <FormField>
            <QuestionFieldContainer actions={this.props.actions} />
            <div data-gridlex="grid-noGutter">
              <div data-gridlex="col">
               {answerList}
              </div>
              <div data-gridlex="col-2">
                <Btn
                  text="add"
                  tone="dark"
                  onClick={() => this.props.actions.addAnswer()} />
              </div>
            </div>
          </FormField>
        </div>
        <div data-gridlex="grid-center">
          <div data-gridlex="col-12_xs-4_sm-3">
            {!this.props.isUpdateStateEnable && <SubmitBtn
              text="create"
              tone="color1"
              onClick={() => this.props.actions.createDialogue(this.props.question_text,this.props.parent_answer_id,this.props.answer_list,this.props.keyword_list)} />}
            {this.props.isUpdateStateEnable && <SubmitBtn
              text="update"
              tone="color2"
              onClick={() => this.props.actions.updateDialogue(this.props.question_id,this.props.question_text,this.props.parent_answer_id,this.props.answer_list,this.props.keyword_list)} />}
          </div>
        </div>
        <p>{this.props.apiErrorMsg}</p>
      </div>
    );
  }
}
