import * as actionTypes from '../actions/dialogue';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  title_question: 'Question',
  title_question_id: 'question_id',
  title_parent_id: 'parent_id',
  title_answer: 'Answer',
  title_word: 'keyword',
  title_weight: 'weight',
  question_id: 0,
  question_text: '',
  parent_id: -1,
  answer_list:[
    {
      answer_temp_id: 0,
      answer_text: '',
      isValid: true,
      errorCode: '',
      keywords:[
        {
          answer_temp_id: 0,
          keyword_temp_id: 0,
          word: '',
          weight: 0.0,
          isValid: true,
          errorCode: ''
        }
      ],
    }
  ],
  keyword_list:[
    {
      answer_temp_id: 0,
      keyword_temp_id: 0,
      word: '',
      weight: 0.0,
      isValid: true,
      errorCode: ''
    }
  ],
  isAddAnswerEnable:true,
  isAddKeywordEnable:true,
  isRequired: false,
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
    const new_list_item = Object.assign({}, state.keyword_list[index], newState);
    const new_list = [
      ...state.keyword_list.slice(0, index),
      Object.assign({},new_list_item,{answer_temp_id: answer_index, isValid: true, errorCode: ''}),
      ...state.keyword_list.slice(index + 1)
    ];
    return Object.assign({},state,{
      keyword_list: new_list
    });
  };

  switch (action.type){
    case actionTypes.SET_DIALOGUE:
      return Object.assign({},state,{
        question_text: action.payload.question_text,
        parent_id: action.payload.parent_id,
        answer_list: action.payload.answers,
        keyword_list: action.payload.keywords
      });
    case actionTypes.INPUT_QUESTION_ID:
      return Object.assign({},state,{question_id: action.payload.question_id});
    case actionTypes.INPUT_QUESTION_TEXT:
      return Object.assign({},state,{question_text: action.payload.text});
    case actionTypes.INPUT_QUESTION_PARENT_ID:
      return Object.assign({},state,{parent_id: action.payload.parent_id});
    case actionTypes.INPUT_ANSWER_TEXT:
      const makeAnswerState = (state,index,newState) => {
        const new_list_item = Object.assign({}, state.answer_list[index], newState);
        const new_list = [
          ...state.answer_list.slice(0, index),
          Object.assign({},new_list_item,{isValid: true, errorCode: ''}),
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
      const makeAddKeywordState = (state,answer_index) => {
        const keyword_index = Object.keys(state.keyword_list).length;
        return Object.assign({},state,{
          keyword_list:[
            ...state.keyword_list,
            {answer_temp_id: answer_index, keyword_temp_id: keyword_index, word: '', weight: 0, isValid: true, errorCode: ''}
          ]
        });
      };
      return makeAddKeywordState(state,action.payload.answer_idx);
    case actionTypes.DELETE_KEYWORD:
       const makeDeleteKeywordState = (state,index,answer_index) => {
         const deletedKeyword = state.keyword_list.filter((value, i) => {return value.answer_temp_id === answer_index && value.keyword_temp_id !== index});
         const otherKeywordRelatedAnswer = state.keyword_list.filter((value, i) => {return value.answer_temp_id !== answer_index});
         return deletedKeyword.length > 0 ? Object.assign({}, state, {
             keyword_list: [...deletedKeyword, ...otherKeywordRelatedAnswer],
             isAddKeywordEnable: true
           })
           : Object.assign({}, state, {
             keyword_list: [
               ...deletedKeyword,
               ...otherKeywordRelatedAnswer,
               {answer_temp_id: answer_index, keyword_temp_id: index, word: '', weight: 0, isValid: true, errorCode: ''}
             ]
           });
        };
      return makeDeleteKeywordState(state,action.payload.idx,action.payload.answer_idx);
    case actionTypes.ADD_ANSWER:
      const answer_index = Object.keys(state.answer_list).length;
      const keyword_index = Object.keys(state.keyword_list).length;
      return Object.assign({},state,{
        answer_list:[
          ...state.answer_list,
          {answer_temp_id: answer_index, answer_text: '', isValid: '', errorCode: '', keywords: [{answer_temp_id: answer_index, keyword_temp_id: keyword_index, word: '', weight: 0, isValid: true, errorCode: ''}]}
        ],
        keyword_list:[
          ...state.keyword_list,
          {answer_temp_id: answer_index, keyword_temp_id: keyword_index, word: '', weight: 0, isValid: true, errorCode: ''}
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
          {answer_temp_id: action.payload.idx, answer_text: '', isValid: '', errorCode: '', keywords: [{answer_temp_id: action.payload.idx, word: '', weight: 0, isValid: true, errorCode: ''}]}
        ]
      });
    case actionTypes.FETCH_ERROR_QUESTION:
      return Object.assign({},state,{errorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
