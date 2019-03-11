import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import logger from 'redux-logger'

import * as reducers from './states/reducers';
import './index.css';
import App from './App';

const rootReducer = combineReducers({
    prisons: reducers.prisons,
    loading: reducers.loading,
    error: reducers.error,
    authed: reducers.authed
  });

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root')
    );

