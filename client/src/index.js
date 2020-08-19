import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.scss';
import App from './components/APP/App';
import {Provider} from 'react-redux';
import { configureStore } from './store';

let store=configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);