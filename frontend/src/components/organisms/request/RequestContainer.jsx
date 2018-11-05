import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addressActionCreators from 'actions/address';
import * as mailActionCreators from 'actions/mail';
import * as telActionCreators from 'actions/tel';
import * as zipActionCreators from 'actions/zip';
import * as schoolYearActionCreators from 'actions/school_year';
import Request from './request.jsx'

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, addressActionCreators, mailActionCreators, telActionCreators, zipActionCreators, schoolYearActionCreators), dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Request);
