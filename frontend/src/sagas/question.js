import { take, call, put, select } from 'redux-saga/effects'
import * as questionActions from '../actions/question'
// import { getSearchWord } from 'selectors/admin/search'
import * as API from '../apis/API'

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

export function* createQuestion() {
  while (true) {
    const action = yield take(questionActions.CREATE_QUESTION);
    console.log(action);
    yield call(API.create,'questions',action.payload.data);
    const { payload, error } = yield call(API.read,'questions');
    yield call(_setQuestion,payload,error)
  }
}

// export function* updateQuestion() {
//   while (true) {
//     const action = yield take(questionActions.UPDATE_ARTICLE);
//     yield call(API.update,'article',action.payload.index,action.payload.data);
//     const { payload, error } = yield call(_searchWordToReadAPI,'article',action);
//     yield call(_setQuestion,payload,error)
//   }
// }

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

function* _setQuestion(payload,error) {
  if (payload && !error) {
    yield put(questionActions.setQuestion(payload))
  }
  else {
    yield put(questionActions.fetchQuestionError(error))
  }
}

// function* _searchWordToReadAPI(repository,action) {
//   const searchWord = yield select(getSearchWord);
//   const { payload, error } = searchWord === '' ?
//     yield call(API.read,repository,action.payload.page) :
//     yield call(API.readWord,repository,searchWord,action.payload.page);
//   return { payload, error };
// }
