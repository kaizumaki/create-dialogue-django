import * as actionTypes from '../actions/question';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  title: 'Question',
  question_id: 0,
  question_text: '',
  parent_id: -1,
  isRequired: true,
  isValid: true,
  isShowError: false,
  errorCode: '',
  errorMsg:{
    question_empty_error: '入力してください',
    question_too_long_error: '入力文字数が多すぎます'
  },
  temp:{
    question_text: '',
    parent_id: -1
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState,action) {
  const maxQuestionLength = 1000;

  const validateQuestion = (newState) => {
    if(newState.question_text !== ''){
      if(newState.question_text.length > maxQuestionLength) {
        return {isValid:false, errorCode:'question_too_long_error'}
      }
      else {
        return {isValid:true,  errorCode:''}
      }
    }
    else{
      return {isValid:false, errorCode:'question_empty_error'}
    }
  };

  const makeState = (state,newStateItem) => {
    const newState = Object.assign({}, state, newStateItem);
    return Object.assign({}, newState, validateQuestion(newState));
  };

  switch (action.type){
    case actionTypes.SET_QUESTION:
      return Object.assign({},state,{
        question_id: action.payload.id,
        question_text: action.payload.text,
        parent_id: action.payload.parent_id
      });
    case actionTypes.INPUT_QUESTION_TEXT:
      const newTextTemp = Object.assign({},state.temp,{question_text: action.payload.text});
      return Object.assign({},state,{temp: newTextTemp});
    case actionTypes.INPUT_QUESTION_PARENT_ID:
      const newParentIdTemp = Object.assign({},state.temp,{parent_id: action.payload.parent_id});
      return Object.assign({},state,{temp: newParentIdTemp});
    case actionTypes.FETCH_ERROR_QUESTION:
      return Object.assign({},state,{errorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
