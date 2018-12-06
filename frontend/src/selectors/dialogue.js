export function getDialogueState(state, payload) {
  let answerWithKeyword = [];
  let answers = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    let splitAnswerTexts = answerObj[index].answer_texts.split(',');
    let keywordRelatedAnswer = payload.keywords.filter((v, i) => {return v.answer_temp_id === answerObj[index].answer_temp_id});
    answerWithKeyword[index] = Object.assign({}, answerObj[index], {answer_texts: splitAnswerTexts, keywords: keywordRelatedAnswer});
    answers.push(answerWithKeyword[index]);
  });
  return Object.assign({},state,{
    temp:{
      question_text: payload.question_text,
      parent_answer_id: payload.parent_answer_id,
      answers: answers
    }
  });
}

export function setDialogueTemp(state, payload) {
  let answerItem = [];
  let answers = [];
  let keywordItem = [];
  let keywords = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    let joinAnswerTexts = answerObj[index].answer_texts.join(',');
    answerItem[index] = Object.assign({}, answerObj[index], {answer_texts: joinAnswerTexts, isRequired: true, isValid: true, errorCode: 'answer_empty_error'});
    answers.push(answerItem[index]);
    let keywordsObj = answerObj[index].keywords;
    Object.keys(keywordsObj).forEach((v, i) => {
      keywordItem[i] = Object.assign({}, keywordsObj[i], {isRequired: true, isValid: true, errorCode: 'keyword_empty_error'});
      keywords.push(keywordItem[i]);
    });
  });
  return Object.assign({}, state, {
    question_text: payload.question_text,
    parent_answer_id: payload.parent_answer_id,
    answer_list: answers,
    keyword_list: keywords
  });
}

export function isValidState(state) {
  return [
    state.dialogue.isValid,
    state.dialogue.answer_list.filter(item=>item.isValid === true).length === state.dialogue.answer_list.length,
    state.dialogue.keyword_list.filter(item=>item.isValid === true).length === state.dialogue.keyword_list.length
  ].every(item=>item);
}
