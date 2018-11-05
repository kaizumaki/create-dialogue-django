import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as nameActionCreators from 'actions/name';
import Name from './name.jsx'

function mapStateToProps(state) {
  const n = state.name;
  return {
    title       : n.title_name,
    value       : n.name,
    isValid     : n.isValidName,
    isShowError : n.isShowError,
    errorCode   : n.errorCodeName,
    errorMsg    : n.errorMsg,
    label       : encodeURI(n.title_name)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(nameActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Name);
