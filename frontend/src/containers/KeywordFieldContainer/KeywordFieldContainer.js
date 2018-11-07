import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import KeywordField from '../../components/molecules/KeywordField/KeywordField';

function mapStateToProps(state) {
  const q = state.dialogue;
  return {
    title        : q.title,
    question_id  : q.question_id,
    question_text: q.question_text,
    parent_id    : q.parent_id,
    answer_list  : q.answer_list,
    isAddAnswerEnable: q.isAddAnswerEnable,
    isAddKeywordEnable: q.isAddKeywordEnable,
    isRequired   : q.isRequired,
    isValid      : q.isValid,
    isShowError  : q.isShowError,
    errorCode    : q.errorCode,
    errorMsg     : q.errorMsg,
    temp         : q.temp,
    label        : encodeURI(q.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, dialogueActionCreators), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(KeywordField);
