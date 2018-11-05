import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as stepsActionCreators from 'actions/steps';
import FormContact from './formContact.jsx'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(stepsActionCreators, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(FormContact);
