import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";
import mainReducer from './mainReducer';
import newsReducer from './newsReducer';

let rootReducer = combineReducers ({
	mainPage: mainReducer,
	newsPage: newsReducer
});

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;