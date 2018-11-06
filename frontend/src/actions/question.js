export const SET_QUESTION = 'SET_QUESTION';
export const INPUT_QUESTION_TEXT = 'INPUT_QUESTION_TEXT';
export const INPUT_QUESTION_PARENT_ID = 'INPUT_QUESTION_PARENT_ID';
export const CREATE_QUESTION = 'CREATE_QUESTION';
export const FETCH_ERROR_QUESTION    = 'FETCH_ERROR_QUESTION';

/**
 * サーバから受信したデータをstoreに適用する
 * @param data
 * @returns {{type: string, payload: *}}
 */
export function setQuestion(id, text, parent_id) {
  return {
    type: SET_QUESTION,
    payload:{
      id: parseInt(id),
      text: text,
      parent_id: parseInt(parent_id)
    }
  }
}

export function inputQuestionText(text) {
  return {
    type:INPUT_QUESTION_TEXT,
    payload:{
      text: text
    }
  }
}

export function inputQuestionParentId(parent_id) {
  return {
    type:INPUT_QUESTION_PARENT_ID,
    payload:{
      parent_id: parseInt(parent_id)
    }
  }
}

export function createQuestion(data) {
  return {
    type:CREATE_QUESTION,
    payload:{
      data: data
    }
  }
}

/**
 * fetchに失敗したとき
 * @param error
 * @returns {{type: string, payload: {error: *}}}
 */
export function fetchQuestionError(error) {
  return {
    type: FETCH_ERROR_QUESTION,
    payload:{
      error: error
    }
  }
}
