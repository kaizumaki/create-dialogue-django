export function setDialogueAnswerTemp(state, payload) {
  let answerWithKeyword = [];
  let answers = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    let keywordRelatedAnswer = payload.keywords.filter((value, i) => {return value.answer_temp_id === answerObj[index].answer_temp_id});
    answerWithKeyword[index] = Object.assign({}, answerObj[index], {keywords: keywordRelatedAnswer});
    answers.push(answerWithKeyword[index]);
  });
  return answers;
}

export function getDialogueState(state, payload, answers) {
  return Object.assign({},state,{
    temp:{
      question_text: payload.question_text,
      parent_id: payload.parent_id,
      answers: answers
    }
  });
}

export function setDialogueTemp(state, payload) {
  let keywordIncludedAnswer = [];
  let keywords = [];
  const answerObj = payload.answers;
  Object.keys(answerObj).forEach((value, index) => {
    keywordIncludedAnswer[index] = answerObj[index].keywords;
    keywords.push(answerObj[index].keywords);
  });
  return Object.assign({}, state, {
    question_text: payload.question_text,
    parent_id: payload.parent_id,
    answer_list: payload.answers,
    keyword_list: keywords[0]
  });
}
