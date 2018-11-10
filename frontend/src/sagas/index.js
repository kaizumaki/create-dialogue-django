import { fork, all } from 'redux-saga/effects'
import { createDialogue, setDialogue, updateDialogue } from './dialogue'

export default function* rootSaga() {
  yield all([
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue)
  ]);
}
