import * as dialogueAction from '../actions/dialogue';

const initialState = {
  hotSettings: {
    data: [[]],
    minRows: 4,
    minCols: 7,
    minSpareRows: 1,
    colWidths: [80, 350, 80, 80, 350, 150, 80],
    colHeaders: ['id', 'text', 'parent_id', 'answer_id', 'answer_text', 'keyword', 'weight'],
    contextMenu: true
  },
  question: {
    id: 0,
    text: '',
    parent_id: 0
  },
  answer: {
    id: 0,
    text: []
  },
  keyword: {
    word: '',
    weight: 0
  }
};

export default function (state = initialState, action) {
  switch (action.type) {
    case dialogueAction.GET_QUESTION:
      return Object.assign({}, state, {
        question: {
          id: action.payload.id,
          text: action.payload.text,
          parent_id: action.payload.parent_id
        }
      });
    case dialogueAction.GET_ANSWER:
      let answer_obj = {};
      action.payload.answer_id.forEach((id, index)=>{
        if(id !== null) {
          answer_obj[index] = {
            id: action.payload.answer_id[index],
            text: (action.payload.answer_text[index] || '').split(',')
          };
        }
      });
      return Object.assign({}, state, {
        answer: answer_obj
      });
    case dialogueAction.GET_KEYWORD:
      let keyword_obj = {};
      action.payload.keyword.forEach((keyword, index)=>{
        if(keyword !== null) {
          keyword_obj[index] = {
            word: action.payload.keyword[index],
            weight: action.payload.weight[index]
          };
        }
      });
      return Object.assign({}, state, {
        keyword: keyword_obj
      });
    default:
      return state
  }
}
