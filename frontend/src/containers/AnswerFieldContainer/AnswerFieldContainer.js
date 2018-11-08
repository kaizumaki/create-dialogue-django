import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import AnswerField from '../../components/molecules/AnswerField/AnswerField';

function mapStateToProps(state) {
  const d = state.dialogue;
  return {
    title        : d.title,
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
    temp         : d.temp,
    label        : encodeURI(d.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, dialogueActionCreators), dispatch)
  };
}

export default connect(mapStateToProps)(AnswerField);
