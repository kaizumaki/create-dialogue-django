import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as questionActionCreators from '../../actions/question';
import Dialogue from '../../components/organisms/Dialogue/Dialogue';

function mapStateToProps(state) {
  const q = state.question;
  return {
    title        : q.title,
    question_id  : q.question_id,
    question_text: q.question_text,
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
    actions: bindActionCreators(Object.assign({}, questionActionCreators), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogue);
