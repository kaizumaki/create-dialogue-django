import { connect } from 'react-redux';
import QuestionField from '../../components/molecules/QuestionField/QuestionField';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    title_question: d.title_question,
    title_parent_id: d.title_parent_id,
    title_answer: d.title_answer,
    title_word: d.title_word,
    title_weight: d.title_weight,
    question_id  : d.question_id,
    question_text: d.question_text,
    parent_id    : d.parent_id,
    answer_list  : d.answer_list,
    keyword_list : d.keyword_list,
    isAddAnswerEnable : d.isAddAnswerEnable,
    isAddKeywordEnable: d.isAddKeywordEnable,
    isRequired   : d.isRequired,
    isValid      : d.isValid,
    isShowError  : d.isShowError,
    errorCode    : d.errorCode,
    errorMsg     : d.errorMsg,
    temp         : d.temp
  };
}

export default connect(mapStateToProps)(QuestionField);
