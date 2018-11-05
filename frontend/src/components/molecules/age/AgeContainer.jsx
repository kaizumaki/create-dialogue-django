import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as ageActionCreators from 'actions/age';
import Age from './age.jsx';

function mapStateToProps(state) {
  const a = state.age;
  return {
    title       : a.title,
    value       : a.value,
    isValid     : a.isValid,
    isShowError : a.isShowError,
    errorCode   : a.errorCode,
    errorMsg    : a.errorMsg,
    label       : encodeURI(a.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ageActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Age);
