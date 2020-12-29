import { newsAPI } from '../api/api'

const SET_NEWS = 'SET_NEWS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
// const UPDATE_NEWS = 'UPDATE_NEWS';

let initialState = {
	news: [],
	isLoading: false
}

const mainReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS:
			return {
				...state,
				news: state.news.concat([action.news])
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
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});

export const getNewsIds = () => {
	return (dispatch) => {
		// dispatch(toggleIsLoading(true));
		newsAPI.getNewsIds()
		.then(data => {
			for (let i = 0; i < 10; i++) {
				dispatch(getNews(data[i]));
			}
		})
		// dispatch(toggleIsLoading(false));

	}
};

export const getNews = (newsId) => {
	return (dispatch) => {
		newsAPI.getNews(newsId)
		.then(data => {
			if (data)
			dispatch(setNews(data));
		});
	}
};

export default mainReducer;