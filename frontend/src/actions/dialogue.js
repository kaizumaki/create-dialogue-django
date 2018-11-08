export const SET_QUESTION = 'SET_QUESTION';
export const INPUT_QUESTION_TEXT = 'INPUT_QUESTION_TEXT';
export const INPUT_QUESTION_PARENT_ID = 'INPUT_QUESTION_PARENT_ID';
export const INPUT_ANSWER_TEXT = 'INPUT_ANSWER_TEXT';
export const INPUT_WORD = 'INPUT_WORD';
export const INPUT_WEIGHT = 'INPUT_WEIGHT';
export const ADD_KEYWORD = 'ADD_KEYWORD';
export const DELETE_KEYWORD = 'DELETE_KEYWORD';
export const ADD_ANSWER = 'ADD_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const CREATE_DIALOGUE_TEMP = 'CREATE_DIALOGUE_TEMP';
export const CREATE_DIALOGUE = 'CREATE_DIALOGUE';
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
    type: INPUT_QUESTION_TEXT,
    payload:{
      text: text
    }
  }
}

export function inputQuestionParentId(parent_id) {
  return {
    type: INPUT_QUESTION_PARENT_ID,
    payload:{
      parent_id: parseInt(parent_id)
    }
  }
}

export function inputAnswerText(texts, idx) {
  return {
    type: INPUT_ANSWER_TEXT,
    payload:{
      texts: texts,
      idx: parseInt(idx)
    }
  }
}

export function inputWord(word, idx, answer_idx) {
  return {
    type: INPUT_WORD,
    payload:{
      word: word,
      idx: parseInt(idx),
      answer_idx: parseInt(answer_idx)
    }
  }
}

export function inputWeight(weight, idx, answer_idx) {
  return {
    type: INPUT_WEIGHT,
    payload:{
      weight: parseInt(weight),
      idx: parseInt(idx),
      answer_idx: parseInt(answer_idx)
    }
  }
}

export function addKeyword(answer_idx) {
  return {
    type: ADD_KEYWORD,
    payload:{
      answer_idx: parseInt(answer_idx)
    }
  }
}

export function deleteKeyword(idx, answer_idx) {
  return {
    type: DELETE_KEYWORD,
    payload:{
      idx: parseInt(idx),
      answer_idx: parseInt(answer_idx)
    }
  }
}

export function addAnswer() {
  return {
    type: ADD_ANSWER
  }
}

export function deleteAnswer(idx) {
  return {
    type: DELETE_ANSWER,
    payload:{
      idx: parseInt(idx)
    }
  }
}

export function createDialogueTemp(question_text, parent_id, answers) {
  return {
    type: CREATE_DIALOGUE_TEMP,
    payload:{
      question_text: question_text,
      parent_id: parseInt(parent_id),
      answers: answers
    }
  }
}

export function createDialogue(data) {
  return {
    type: CREATE_DIALOGUE,
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
