import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as mailActionCreators from 'actions/mail';
import Mail from './mail.jsx'

function mapStateToProps(state) {
  const _mail = state.mail;
  return {
    title       : _mail.title,
    value       : _mail.value,
    isRequired  : _mail.isRequired,
    isValid     : _mail.isValid,
    marks       : _mail.marks,
    isShowError : _mail.isShowError,
    errorCode   : _mail.errorCode,
    errorMsg    : _mail.errorMsg,
    label       : encodeURI(_mail.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(mailActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Mail);
