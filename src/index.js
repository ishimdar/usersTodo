import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import combineReducers from './reducer/index';

import dataService from './APIservice/DataService';

const store = createStore(combineReducers, {}, composeWithDevTools(applyMiddleware(dataService)));

// console.log('store', store);
// console.log('store', store.getState());


ReactDOM.render( <Provider store={store} > <App /> </Provider>, 
    document.getElementById('root'));

store.dispatch({ type: 'GET_USER_DATA' });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
