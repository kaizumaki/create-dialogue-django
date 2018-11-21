import { connect } from 'react-redux';
import AnswerField from '../../components/molecules/AnswerField/AnswerField';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    title_question   : d.title_question,
    title_question_id: d.title_question_id,
    title_parent_answer_id: d.title_parent_answer_id,
    title_answer     : d.title_answer,
    title_word       : d.title_word,
    title_weight     : d.title_weight,
    question_id      : d.question_id,
    question_text    : d.question_text,
    parent_answer_id : d.parent_answer_id,
    exists_answers   : d.exists_answers,
    answer_list      : d.answer_list,
    keyword_list     : d.keyword_list,
    isAddAnswerEnable: d.isAddAnswerEnable,
    isAddKeywordEnable: d.isAddKeywordEnable,
    isRequired       : d.isRequired,
    isValid          : d.isValid,
    isShowError      : d.isShowError,
    errorCode        : d.errorCode,
    errorMsg         : d.errorMsg,
    apiErrorMsg      : d.apiErrorMsg,
    temp             : d.temp
  };
}

export default connect(mapStateToProps)(AnswerField);
