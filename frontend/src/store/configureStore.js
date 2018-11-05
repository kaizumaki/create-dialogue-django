import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/index'
import rootReducer from '../reducers/index'

export function configureStore (initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      sagaMiddleware
    )
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
