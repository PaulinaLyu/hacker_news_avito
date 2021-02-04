import { newsAPI } from '../api/api'

const SET_NEWS = 'SET_NEWS';
const RESET_NEWS = 'RESET_NEWS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	news: [],
}

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS:
			return {
				...state,
				// news: state.news.some(element => element.id === action.news.id)
				// ? state.news
				// : [action.news, ...state.news]
				news: [action.news, ...state.news]
			}
		case RESET_NEWS:
			return {
				...state,
				news: []
			}
		case TOGGLE_IS_LOADING:
			return {
				...state,
				isLoading: action.isLoading
			}
		default:
			return state;
	}
}

export const setNews = (news) => ({type: SET_NEWS, news});
export const resetNews = () => ({type: RESET_NEWS});

export const getNewsIds = () => {
	return (dispatch) => {
		dispatch(resetNews());
		newsAPI.getNewsIds()
		.then(data => {
			for (let i = 50; i > 0; i--) {
				dispatch(getNews(data[i]));
			}
		})
	}
};

export const getNews = (newsId) => {
	return (dispatch) => {
		newsAPI.getNews(newsId)
		.then(data => {
			if (data) dispatch(setNews(data));
		});
	}
};

export default mainReducer;