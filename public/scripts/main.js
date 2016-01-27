import React from 'react';
import ReactDom from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import routes from'./config/routes';
import reducers from './reducers';

const loggerMiddleware = createLogger();

const createStoreWithMiddleware = applyMiddleware(
    loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(reducers);

ReactDom.render(
    <Provider store={store}>
        {routes}
    </Provider>,
    document.getElementById('react-container'));