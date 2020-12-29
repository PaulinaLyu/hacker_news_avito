import { newsAPI, commentAPI } from '../api/api'

const SET_NEWS_PROFILE = 'SET_NEWS_PROFILE';
const SET_COMMENTS = 'SET_COMMENTS';

let initialState = {
	newsProfile: {},
	comments: []
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
				comments: state.comments.concat([action.comment])
			}
		default:
			return state;
	}
}

export const setNewsProfile = (newsProfile) => ({type: SET_NEWS_PROFILE, newsProfile});
export const setComments = (comment) => ({type: SET_COMMENTS, comment});

export const getNewsProfile = (newsId) => {
	return (dispatch) => {
		newsAPI.getNews(newsId)
		.then(data => {
			dispatch(setNewsProfile(data));
			if (data.kids) {
				data.kids.forEach((item) => {
					dispatch(getComment(item));
				})
			}
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


export default newsReducer;