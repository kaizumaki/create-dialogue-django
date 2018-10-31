import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as dialogueActionCreators from '../../actions/dialogue';
import Dialogue from '../../components/Dialogue/Dialogue';

function mapStateToProps(state) {
  const dialogue = state.dialogue;
  return {
    hotSettings: dialogue.hotSettings,
    question: dialogue.question,
    answer: dialogue.answer,
    keyword: dialogue.keyword
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(dialogueActionCreators, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogue)
