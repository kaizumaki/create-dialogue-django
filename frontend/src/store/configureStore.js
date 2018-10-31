import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export function configureStore (initialState) {
  const store = createStore(
    rootReducer,
    initialState
  );
  return store;
}
