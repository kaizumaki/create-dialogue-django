import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { configureStore } from './store/configureStore';
import './scss/styles.scss';
import DialogueContainer from './containers/DialogueContainer/DialogueContainer';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={ store }>
      <DialogueContainer />
    </Provider>,
    document.getElementById('app')
  );
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
