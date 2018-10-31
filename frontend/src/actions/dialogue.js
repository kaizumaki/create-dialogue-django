export const GET_QUESTION = 'GET_QUESTION';
export const GET_ANSWER   = 'GET_ANSWER';
export const GET_KEYWORD  = 'GET_KEYWORD';

export function getQuestion(id, text, parent_id) {
  return {
    type: 'GET_QUESTION',
    payload: {
      id,
      text,
      parent_id
    }
  }
};

export function getAnswer(answer_id, answer_text) {
  return {
    type: 'GET_ANSWER',
    payload: {
      answer_id,
      answer_text,
    }
  }
};

export function getKeyword(keyword, weight) {
  return {
    type: 'GET_KEYWORD',
    payload: {
      keyword,
      weight
    }
  }
};
