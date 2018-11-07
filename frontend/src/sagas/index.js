import { fork, all } from 'redux-saga/effects'
import { createDialogue } from './dialogue'

export default function* rootSaga() {
  yield all([
    fork(createDialogue)
  ]);
}
