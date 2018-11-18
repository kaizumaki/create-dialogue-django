export function setDialogueAnswerTemp(state, payload) {
  let answerWithKeyword = [];
  let answers = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    let splitAnswerTexts = answerObj[index].answer_texts.split(',');
    let keywordRelatedAnswer = payload.keywords.filter((value, i) => {return value.answer_temp_id === answerObj[index].answer_temp_id});
    answerWithKeyword[index] = Object.assign({}, answerObj[index], {answer_texts: splitAnswerTexts, keywords: keywordRelatedAnswer});
    answers.push(answerWithKeyword[index]);
  });
  return answers;
}

export function getDialogueState(state, payload, answers) {
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
  let keywords = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    let joinAnswerTexts = answerObj[index].answer_texts.join(',');
    answerItem[index] = Object.assign({}, answerObj[index], {answer_texts: joinAnswerTexts});
    answers.push(answerItem[index]);
    let keywordsObj = answerObj[index].keywords;
    Object.keys(keywordsObj).forEach((v, i) => {
      keywords.push(keywordsObj[i]);
    });
  });
  return Object.assign({}, state, {
    question_text: payload.question_text,
    parent_answer_id: payload.parent_answer_id,
    answer_list: answers,
    keyword_list: keywords
  });
}
