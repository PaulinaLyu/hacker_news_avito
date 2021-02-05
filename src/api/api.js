import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'https://hacker-news.firebaseio.com/v0/',
});

export const newsAPI = {
	getNewsIds () {
		return instance.get(`/newstories.json`)
		.then(response => {
			return response.data;
		})
	},

	getNews (newsId) {
		return instance.get(`/item/${newsId}.json`)
		.then(response => {
			return response.data;
		})
	},
};

export const commentAPI = {
	getComment (commentId) {
		return instance.get(`item/${commentId}.json`)
		.then(response => {
			return response.data;
		})
	},
	getKidsComment (kidId) {
		return instance.get(`item/${kidId}.json`)
		.then(response => {
			return response.data;
		})
	}
};