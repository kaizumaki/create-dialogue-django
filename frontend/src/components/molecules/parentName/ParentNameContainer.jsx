import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as parentActionCreators from 'actions/parent_name';
import ParentName from './parentName.jsx'

function mapStateToProps(state) {
  const p_n = state.parent_name;
  return {
    title       : p_n.title,
    value       : p_n.value,
    isValid     : p_n.isValid,
    isShowError : p_n.isShowError,
    errorCode   : p_n.errorCode,
    errorMsg    : p_n.errorMsg,
    label       : encodeURI(p_n.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(parentActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ParentName);
