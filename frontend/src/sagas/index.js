import { fork, all } from 'redux-saga/effects'
import { createQuestion } from './question'

export default function* rootSaga() {
  yield all([
    fork(createQuestion)
  ]);
}
