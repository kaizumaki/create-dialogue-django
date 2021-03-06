import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as stepsActionCreators from 'actions/steps';
import FormRequest from './formRequest.jsx'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stepsActionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(FormRequest);
