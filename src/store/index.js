import reducer from '../Reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import {createStore, applyMiddleware} from 'redux'

const logger = createLogger();
const middleware = [thunk, logger];

const initialState = {};

export const store = createStore(reducer, initialState, applyMiddleware(...middleware));

store.subscribe(() => {
	console.log('store change:', store.getState());
})
