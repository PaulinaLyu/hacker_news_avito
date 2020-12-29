import { newsAPI } from '../api/api'

const SET_NEWS_PROFILE = 'SET_NEWS_PROFILE';

let initialState = {
	newsProfile: {}
}

const newsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS_PROFILE:
			return {
				...state,
				newsProfile: action.newsProfile
			}
		default:
			return state;
	}
}

export const setNewsProfile = (newsProfile) => ({type: SET_NEWS_PROFILE, newsProfile});

export const getNews = (newsId) => {
	return (dispatch) => {
		newsAPI.getNews(newsId)
		.then(data => {
			dispatch(setNewsProfile(data));
		});
	}
};


export default newsReducer;