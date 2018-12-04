import * as actionTypes from '../actions/dialogue';
import {
  SHOW_ERROR
} from '../actions/error';

const initialState = {
  title_question: 'Question',
  title_question_id: 'Question ID',
  title_parent_answer_id: 'Parent Answer',
  title_answer: 'Answer',
  title_word: 'Keyword',
  title_weight: 'Weight',
  question_id: 0,
  question_text: '',
  parent_answer_id: -1,
  exists_answers: [],
  answer_list:[
    {
      answer_temp_id: 0,
      answer_texts: '',
      isRequired: true,
      isValid: false,
      errorCode: 'answer_empty_error',
      keywords:[]
    }
  ],
  keyword_list:[
    {
      answer_temp_id: 0,
      keyword_temp_id: 0,
      word: '',
      weight: 0.0,
      isRequired: true,
      isValid: false,
      errorCode: 'keyword_empty_error'
    }
  ],
  isUpdateStateEnable: false,
  isRequired: true,
  isValid: false,
  isShowError: false,
  errorCode: 'question_empty_error',
  errorMsg:{
    question_empty_error: '入力してください',
    answer_empty_error: '入力してください',
    keyword_empty_error: '入力してください'
  },
  apiErrorMsg: '',
  temp:{
    question_text: '',
    parent_answer_id: -1,
    answers: []
  }
};

/**
 *
 * @param state
 * @param action
 * @returns {*}
 */
export default function (state = initialState,action) {
  const answer_temp_index = Object.keys(state.answer_list).length;
  const keyword_temp_index = Object.keys(state.keyword_list).length;

  switch (action.type){
    case actionTypes.SET_DIALOGUE_STATE:
      return Object.assign({},state,{isUpdateStateEnable: true});
    case actionTypes.SET_DIALOGUE:
      return Object.assign({},state,{
        question_text: action.payload.question_text,
        parent_answer_id: action.payload.parent_answer_id,
        answer_list: action.payload.answers,
        keyword_list: action.payload.keywords,
        isValid: action.payload.question_text !== ''
      });
    case actionTypes.SET_ANSWERS:
      return Object.assign({},state,{exists_answers: action.payload.exists_answers});
    case actionTypes.INPUT_QUESTION_ID:
      return Object.assign({},state,{question_id: action.payload.question_id});
    case actionTypes.INPUT_QUESTION_TEXT:
      return Object.assign({},state,{question_text: action.payload.text, isValid: action.payload.text !== ''});
    case actionTypes.INPUT_PARENT_ANSWER_ID:
      return Object.assign({},state,{parent_answer_id: action.payload.parent_answer_id});
    case actionTypes.INPUT_ANSWER_TEXT:
      const makeAnswerState = (state,index,inputData) => {
        const new_list = [
          ...state.answer_list.slice(0, index),
          Object.assign({}, state.answer_list[index], {answer_texts: inputData, isValid: inputData !== ''}),
          ...state.answer_list.slice(index + 1)
        ];
        return Object.assign({},state,{
          answer_list: new_list
        })
      };
      return makeAnswerState(state,action.payload.idx,action.payload.texts);
    case actionTypes.INPUT_WORD:
      const makeKeywordWordState = (state,index,answer_index,inputWord) => {
        const new_list = [
          ...state.keyword_list.slice(0, index),
          Object.assign({}, state.keyword_list[index], {answer_temp_id: answer_index, word: inputWord, isValid: inputWord !== ''}),
          ...state.keyword_list.slice(index + 1)
        ];
        return Object.assign({},state,{
          keyword_list: new_list
        });
      };
      return makeKeywordWordState(state,action.payload.idx,action.payload.answer_idx,action.payload.word);
    case actionTypes.INPUT_WEIGHT:
      const makeKeywordWeightState = (state,index,answer_index,inputWeight) => {
        const new_list = [
          ...state.keyword_list.slice(0, index),
          Object.assign({}, state.keyword_list[index], {answer_temp_id: answer_index, weight: inputWeight}),
          ...state.keyword_list.slice(index + 1)
        ];
        return Object.assign({},state,{
          keyword_list: new_list
        });
      };
      return makeKeywordWeightState(state,action.payload.idx,action.payload.answer_idx,action.payload.weight);
    case actionTypes.ADD_KEYWORD:
      const makeAddKeywordState = (state,answer_index) => {
        const keyword_index = Object.keys(state.keyword_list).length;
        return Object.assign({},state,{
          keyword_list:[
            ...state.keyword_list,
            {answer_temp_id: answer_index, keyword_temp_id: keyword_index, word: '', weight: 0, isRequired: true, isValid: false, errorCode: 'keyword_empty_error'}
          ]
        });
      };
      return makeAddKeywordState(state,action.payload.answer_idx);
    case actionTypes.DELETE_KEYWORD:
       const makeDeleteKeywordState = (state,index,answer_index) => {
         const deletedKeyword = state.keyword_list.filter((value, i) => {return value.answer_temp_id === answer_index && value.keyword_temp_id !== index});
         const otherKeywordRelatedAnswer = state.keyword_list.filter((value, i) => {return value.answer_temp_id !== answer_index});
         return deletedKeyword.length > 0 ? Object.assign({}, state, {
             keyword_list: [...deletedKeyword, ...otherKeywordRelatedAnswer]
           })
           : Object.assign({}, state, {
             keyword_list: [
               ...deletedKeyword,
               ...otherKeywordRelatedAnswer,
               {answer_temp_id: answer_index, keyword_temp_id: index, word: '', weight: 0, isRequired: true, isValid: false, errorCode: 'keyword_empty_error'}
             ]
           });
        };
      return makeDeleteKeywordState(state,action.payload.idx,action.payload.answer_idx);
    case actionTypes.ADD_ANSWER:
      return Object.assign({},state,{
        answer_list:[
          ...state.answer_list,
          {answer_temp_id: answer_temp_index, answer_texts: '', isRequired: true, isValid: false, errorCode: 'answer_empty_error', keywords: []}
        ],
        keyword_list:[
          ...state.keyword_list,
          {answer_temp_id: answer_temp_index, keyword_temp_id: keyword_temp_index, word: '', weight: 0, isRequired: true, isValid: false, errorCode: 'keyword_empty_error'}
        ]
      });
    case actionTypes.DELETE_ANSWER:
      const keywordRelatedAnswer = state.keyword_list.filter((value, i) => {return value.answer_temp_id !== action.payload.idx});
      return state.answer_list.length > 1 ? Object.assign({},state,{
        answer_list:[
          ...state.answer_list.slice(0,action.payload.idx),
          ...state.answer_list.slice(action.payload.idx + 1),
        ],
        keyword_list: keywordRelatedAnswer
        })
      : Object.assign({},state,{
        answer_list:[
          {answer_temp_id: action.payload.idx, answer_texts: '', isRequired: true, isValid: false, errorCode: 'answer_empty_error', keywords: []}
        ],
        keyword_list: [
          ...keywordRelatedAnswer,
          {answer_temp_id: action.payload.idx, keyword_temp_id: keyword_temp_index, word: '', weight: 0, isRequired: true, isValid: false, errorCode: 'keyword_empty_error'}
        ]
      });
    case actionTypes.CLEAR_DIALOGUE:
      return Object.assign({},state,{
        question_id: 0,
        question_text: '',
        parent_answer_id: -1,
        answer_list:[
          {
            answer_temp_id: 0,
            answer_texts: '',
            isRequired: false,
            isValid: true,
            keywords:[]
          }
        ],
        keyword_list:[
          {
            answer_temp_id: 0,
            keyword_temp_id: 0,
            word: '',
            weight: 0.0,
            isRequired: false,
            isValid: true
          }
        ],
        isUpdateStateEnable: false,
        isRequired: false,
        isValid: true,
        isShowError: false,
        apiErrorMsg: '',
        temp:{
          question_text: '',
          parent_answer_id: -1,
          answers: []
        }
      });
    case actionTypes.FETCH_ERROR_DIALOGUE:
      return Object.assign({},state,{apiErrorMsg: action.payload.error});
    case SHOW_ERROR:
      return Object.assign({},state,{isShowError: true});
  }
  return state;
}
