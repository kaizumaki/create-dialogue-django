import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as stepsActionCreators from 'actions/steps';
import SubmitConfirmBtn from './submitConfirmBtn.jsx'

function mapStateToProps(state) {
  return {
    isDisabled : state.steps.isSending
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stepsActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitConfirmBtn);
