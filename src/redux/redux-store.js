import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";
import mainReducer from './mainReducer';
import newsReducer from './newsReducer';

let rootReducer = combineReducers ({
	mainPage: mainReducer,
	newsPage: newsReducer
});

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;