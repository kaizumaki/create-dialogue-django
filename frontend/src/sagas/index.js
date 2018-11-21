import { fork, all } from 'redux-saga/effects'
import { fetchAnswers, createDialogue, setDialogue, updateDialogue } from './dialogue'

export default function* rootSaga() {
  yield all([
    fork(fetchAnswers),
    fork(createDialogue),
    fork(setDialogue),
    fork(updateDialogue)
  ]);
}
