import { newsAPI } from '../api/api'

const SET_NEWS = 'SET_NEWS';
const RESET_NEWS = 'RESET_NEWS';

let initialState = {
	news: [],
}

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS:
			return {
				...state,
				news: state.news.length && state.news[0].time < action.news.time
					? [action.news, ...state.news]
					: [...state.news, action.news]
			}
		case RESET_NEWS:
			return {
				...state,
				news: []
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