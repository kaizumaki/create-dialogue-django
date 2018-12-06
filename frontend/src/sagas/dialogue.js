import { take, call, put, select } from 'redux-saga/effects';
import * as dialogueActions from '../actions/dialogue';
import { show_error } from '../actions/error';
import { getDialogueState, setDialogueTemp, isValidState } from '../selectors/dialogue';
import * as API from '../apis/API';

// export function* initQuestion() {
//   while (true) {
//     yield take(questionActions.INIT_ARTICLE);
//     const { payload, error } = yield call(API.read,'article');
//     yield call(_setQuestion,payload,error)
//   }
// }

// export function* searchQuestion() {
//   while (true) {
//     const action = yield take(questionActions.SEARCH_ARTICLE);
//     const { payload, error } =yield call(API.search,'article',action.payload);
//     yield call(_setQuestion,payload,error)
//   }
// }

export function* fetchAnswers() {
  while (true) {
    yield take(dialogueActions.FETCH_ANSWERS);
    const { payload, error } = yield call(API.read,'answers');
    yield put(dialogueActions.setAnswers(payload));
  }
}

export function* createDialogue() {
  while (true) {
    const action = yield take(dialogueActions.CREATE_DIALOGUE);
    const state = yield select(getDialogueState,action.payload);
    const isValid  = yield select(isValidState);
    if (isValid) {
      const { payload, error } = yield call(API.create,'questions',state.temp);
      yield call(_clearDialogue,payload,error);
    }
    else {
      yield put(show_error());
    }
  }
}

export function* setDialogue() {
  while (true) {
    const action = yield take(dialogueActions.SET_DIALOGUE_STATE);
    const { payload, error } = yield call(API.set,'questions',action.payload.question_id);
    if (payload && !error) {
      const data = yield select(setDialogueTemp,payload);
      yield put(dialogueActions.setDialogue(data.question_text, data.parent_answer_id, data.answer_list, data.keyword_list));
    }
    else {
      yield put(dialogueActions.fetchDialogueError(error.response.data.detail));
    }
  }
}

export function* updateDialogue() {
  while (true) {
    const action = yield take(dialogueActions.UPDATE_DIALOGUE);
    const state = yield select(getDialogueState,action.payload);
    const isValid  = yield select(isValidState);
    if (isValid) {
      const { payload, error } = yield call(API.update,'questions',action.payload.question_id,state.temp);
      yield call(_clearDialogue,payload,error);
    }
    else {
      yield put(show_error());
    }
  }
}

// export function* fetchPageQuestion() {
//   while (true) {
//     const action = yield take(questionActions.FETCH_PAGE_ARTICLE);
//     const { payload, error } = yield call(API.fetchUrl,action.payload.url);
//     yield call(_setQuestion,payload,error)
//   }
// }

// export function* deleteQuestion() {
//   while (true) {
//     const action = yield take(questionActions.PRE_DELETE_ARTICLE);
//     const questionAction = yield take(questionActions.DELETE_ARTICLE);
//     if(questionAction.payload.ok) {
//       yield call(API.destroy,'article',action.payload.index);
//     }
//     const { payload, error } = yield call(_searchWordToReadAPI,'article',action);
//     yield call(_setQuestion,payload,error)
//   }
// }

function* _clearDialogue(api_payload,api_error) {
  if (api_payload && !api_error) {
    yield put(dialogueActions.clearDialogue());
    const { payload, error } = yield call(API.read,'answers');
    yield put(dialogueActions.setAnswers(payload));
  }
  else {
    yield put(dialogueActions.fetchDialogueError(api_error.response.data.detail));
  }
}

// function* _searchWordToReadAPI(repository,action) {
//   const searchWord = yield select(getSearchWord);
//   const { payload, error } = searchWord === '' ?
//     yield call(API.read,repository,action.payload.page) :
//     yield call(API.readWord,repository,searchWord,action.payload.page);
//   return { payload, error };
// }
