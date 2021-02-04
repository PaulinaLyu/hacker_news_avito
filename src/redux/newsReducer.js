import { newsAPI, commentAPI } from '../api/api'

const SET_NEWS_PROFILE = 'SET_NEWS_PROFILE';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_COMMENTS = 'SET_COMMENTS';
const RESET_COMMENTS = 'RESET_COMMENTS';

let initialState = {
	newsProfile: {},
	comments: [],
	isLoading: false
}

const newsReducer = (state = initialState, action) => {
	switch(action.type) {
		case SET_NEWS_PROFILE:
			return {
				...state,
				newsProfile: action.newsProfile
			}
		case SET_COMMENTS:
			return {
				...state,
				comments: [action.comments, ...state.comments]
			}
		case RESET_COMMENTS:
			return {
				...state,
				comments: []
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

export const setNewsProfile = (newsProfile) => ({type: SET_NEWS_PROFILE, newsProfile});
export const toggleIsLoading = (isLoading) => ({type: TOGGLE_IS_LOADING, isLoading});
export const setComments = (comments) => ({type: SET_COMMENTS, comments});
export const resetComments = () => ({type: RESET_COMMENTS});

export const getNewsProfile = (newsId) => {
	return (dispatch) => {
		dispatch(toggleIsLoading(true));
		newsAPI.getNews(newsId)
		.then(data => {
			dispatch(setNewsProfile(data));
			if (data.kids) {
				data.kids.forEach((item) => {
					dispatch(getComment(item));
				})
			}
			dispatch(toggleIsLoading(false));
		});
	}
};

export const getComment = (commentId) => {
	return (dispatch) => {
		commentAPI.getComment(commentId)
		.then(data => {
			dispatch(setComments(data));
		});

	}
};

export const updateComments = (commentsIds) => {
	return (dispatch) => {
		dispatch(resetComments());
		commentsIds
			? commentsIds.forEach((item) => {dispatch(getComment(item))})
			: dispatch(resetComments());
	}
};


export default newsReducer;