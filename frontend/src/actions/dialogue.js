export const FETCH_ANSWERS = 'FETCH_ANSWERS';
export const SET_ANSWERS = 'SET_ANSWERS';
export const INPUT_QUESTION_ID = 'INPUT_QUESTION_ID';
export const INPUT_QUESTION_TEXT = 'INPUT_QUESTION_TEXT';
export const INPUT_PARENT_ANSWER_ID = 'INPUT_PARENT_ANSWER_ID';
export const INPUT_ANSWER_TEXT = 'INPUT_ANSWER_TEXT';
export const INPUT_WORD = 'INPUT_WORD';
export const INPUT_WEIGHT = 'INPUT_WEIGHT';
export const ADD_KEYWORD = 'ADD_KEYWORD';
export const DELETE_KEYWORD = 'DELETE_KEYWORD';
export const ADD_ANSWER = 'ADD_ANSWER';
export const DELETE_ANSWER = 'DELETE_ANSWER';
export const CREATE_DIALOGUE = 'CREATE_DIALOGUE';
export const SET_DIALOGUE_STATE = 'SET_DIALOGUE_STATE';
export const SET_DIALOGUE = 'SET_DIALOGUE';
export const UPDATE_DIALOGUE = 'UPDATE_DIALOGUE';
export const CLEAR_DIALOGUE = 'CLEAR_DIALOGUE';
export const FETCH_ERROR_DIALOGUE    = 'FETCH_ERROR_DIALOGUE';

export function fetchAnswers() {
  return {
    type: FETCH_ANSWERS
  }
}

export function setAnswers(answers) {
  return {
    type: SET_ANSWERS,
    payload:{
      exists_answers: answers
    }
  }
}

export function inputQuestionId(question_id) {
  return {
    type: INPUT_QUESTION_ID,
    payload:{
      question_id: parseInt(question_id)
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

export function inputParentAnswerId(parent_answer_id) {
  return {
    type: INPUT_PARENT_ANSWER_ID,
    payload:{
      parent_answer_id: parseInt(parent_answer_id)
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
      weight: parseFloat(weight),
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

export function createDialogue(question_text, parent_answer_id, answers, keywords) {
  return {
    type: CREATE_DIALOGUE,
    payload:{
      question_text: question_text,
      parent_answer_id: parseInt(parent_answer_id),
      answers: answers,
      keywords: keywords
    }
  }
}

export function setDialogueState(question_id) {
  return {
    type: SET_DIALOGUE_STATE,
    payload:{
      question_id: parseInt(question_id)
    }
  }
}

export function setDialogue(question_text, parent_answer_id, answers, keywords) {
  return {
    type: SET_DIALOGUE,
    payload:{
      question_text: question_text,
      parent_answer_id: parseInt(parent_answer_id),
      answers: answers,
      keywords: keywords
    }
  }
}

export function updateDialogue(question_id, question_text, parent_answer_id, answers, keywords) {
  return {
    type: UPDATE_DIALOGUE,
    payload:{
      question_id: parseInt(question_id),
      question_text: question_text,
      parent_answer_id: parseInt(parent_answer_id),
      answers: answers,
      keywords: keywords
    }
  }
}

export function clearDialogue() {
  return {
    type: CLEAR_DIALOGUE
  }
}

/**
 * fetchに失敗したとき
 * @param error
 * @returns {{type: string, payload: {error: *}}}
 */
export function fetchDialogueError(error) {
  return {
    type: FETCH_ERROR_DIALOGUE,
    payload:{
      error: error
    }
  }
}
