import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActionCreators from 'actions/address';
import * as mailActionCreators from 'actions/mail';
import * as telActionCreators from 'actions/tel';
import Event from './event.jsx'


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, addressActionCreators, mailActionCreators, telActionCreators), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Event);
