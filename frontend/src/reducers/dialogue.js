import * as actionTypes from '../actions/dialogue';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  title: 'Question',
  question_id: 0,
  question_text: '',
  parent_id: -1,
  answer_list:[
    {
      answer_text: '',
      isValid:'',
      errorCode:'',
      keywords:[
        {
          word: '',
          weight: 0,
          isValid:'',
          errorCode:''
        }
      ],
    }
  ],
  isAddAnswerEnable:true,
  isAddKeywordEnable:true,
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
    parent_id: -1,
    answers: [],
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState,action) {
  const makeKeywordState = (state,index,answer_index,newState) => {
    const new_list_item = Object.assign({}, state.answer_list[answer_index].keywords[index], newState);
    const new_list = [
      ...state.answer_list[answer_index].keywords.slice(0, index),
      Object.assign({},new_list_item,{isValid:'valid', errorCode:''}),
      ...state.answer_list[answer_index].keywords.slice(index + 1)
    ];
    return Object.assign({},state,{
      keywords: new_list
    })
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
    case actionTypes.INPUT_ANSWER_TEXT:
      const makeAnswerState = (state,index,newState) => {
        const new_list_item = Object.assign({}, state.answer_list[index], newState);
        const new_list = [
          ...state.answer_list.slice(0, index),
          Object.assign({},new_list_item,{isValid:'valid', errorCode:''}),
          ...state.answer_list.slice(index + 1)
        ];
        return Object.assign({},state,{
          answer_list: new_list
        })
      };
      return makeAnswerState(state,action.payload.idx,{answer_text: action.payload.texts});
    case actionTypes.INPUT_WORD:
      return makeKeywordState(state,action.payload.idx,action.payload.answer_idx,{word: action.payload.word});
    case actionTypes.INPUT_WEIGHT:
      return makeKeywordState(state,action.payload.idx,action.payload.answer_idx,{weight: action.payload.weight});
    case actionTypes.ADD_KEYWORD:
      return  Object.assign({},state.answer_list,{
        keywords:[
          ...state.keywords,
          {word: '', weight: 0, isValid: '', errorCode: ''}
        ]
      });
    case actionTypes.DELETE_KEYWORD:
      const newKeywordList = state.answer_list.keywords.length > 1 ? Object.assign({},state.answer_list,{
        keywords:[
            ...state.answer_list.keywords.slice(0,action.payload.idx),
            ...state.answer_list.keywords.slice(action.payload.idx + 1),
          ],
          isAddKeywordEnable: true
        })
      : Object.assign({},state.answer_list,{
        keywords:[
          { word: '', weight: 0, isValid: '', errorCode: '' }
        ]
      });
      return Object.assign({},state,{answer_list: {answer_text: [], isValid:'', errorCode:'', keywords: newKeywordList}});
    case actionTypes.ADD_ANSWER:
      return  Object.assign({},state,{
        answer_list:[
          ...state.answer_list,
          {answer_text: '', isValid: '', errorCode: '', keywords: {word: '', weight: 0, isValid:'', errorCode:''}}
        ]
      });
    case actionTypes.DELETE_ANSWER:
      return state.answer_list.length > 1 ? Object.assign({},state,{
        answer_list:[
            ...state.answer_list.slice(0,action.payload.idx),
            ...state.answer_list.slice(action.payload.idx + 1),
          ],
          isAddAnswerEnable: true
        })
      : Object.assign({},state,{
        answer_list:[
          {answer_text: '', isValid: '', errorCode: '', keywords: {word: '', weight: 0, isValid:'', errorCode:''}}
        ]
      });
    case actionTypes.CREATE_DIALOGUE_TEMP:
      return  Object.assign({},state,{
        temp:{
          question_text: action.payload.question_text,
          parent_id: action.payload.parent_id,
          answers: action.payload.answers
        }
      });
    case actionTypes.FETCH_ERROR_QUESTION:
      return Object.assign({},state,{errorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
