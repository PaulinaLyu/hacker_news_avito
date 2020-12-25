import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import mainReducer from './mainReducer';
import newsReducer from './newsReducer';

let reducers = combineReducers ({
	mainPage: mainReducer,
	newsPage: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;