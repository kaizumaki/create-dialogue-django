import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as schoolActionCreators from 'actions/school';
import SchoolName from './schoolName.jsx'

function mapStateToProps(state) {
  const s = state.school;
  return {
    title       : s.title,
    value       : s.value,
    isValid     : s.isValid,
    isRequired  : s.isRequired,
    marks       : s.marks,
    isShowError : s.isShowError,
    errorCode   : s.errorCode,
    errorMsg    : s.errorMsg,
    label       : encodeURI(s.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(schoolActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolName);
