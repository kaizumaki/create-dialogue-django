import { fork, all } from 'redux-saga/effects'
import { createDialogue, setDialogue } from './dialogue'

export default function* rootSaga() {
  yield all([
    fork(createDialogue),
    fork(setDialogue)
  ]);
}
