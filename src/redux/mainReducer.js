import { newsAPI } from '../api/api'

const SET_NEWS = 'SET_NEWS';
// const UPDATE_NEWS = 'UPDATE_NEWS';

let initialState = {
	news: []
}

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS:
			console.log(action.news);
			return {
				...state,
				news: state.news.concat([action.news])
			}
		default:
			return state;
	}
}

export const setNews = (news) => ({type: SET_NEWS, news});

export const getNewsIds = () => {
	return (dispatch) => {

		newsAPI.getNewsIds()
		.then(data => {
			for (let i = 0; i < 10; i++) {
				dispatch(getNews(data[i]));
			}
		});
	}
};

export const getNews = (newsId) => {
	return (dispatch) => {
		newsAPI.getNews(newsId)
		.then(data => {
			dispatch(setNews(data));
		});
	}
};

export default mainReducer;