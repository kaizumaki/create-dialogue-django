import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as schoolYearActionCreators from 'actions/school_year';
import SchoolYear from './schoolYear.jsx'

function mapStateToProps(state) {
  const s_year = state.school_year;
  return {
    title          : s_year.title,
    schoolYearList : s_year.schoolYearList,
    selectedYear   : s_year.value,
    isRequired     : s_year.isRequired,
    isValid        : s_year.isValid,
    isShowError    : s_year.isShowError,
    errorCode      : s_year.errorCode,
    errorMsg       : s_year.errorMsg,
    label          : encodeURI(s_year.title)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(schoolYearActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SchoolYear);
