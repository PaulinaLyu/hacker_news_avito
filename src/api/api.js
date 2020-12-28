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

	getNews (id) {
		return instance.get(`/item/${id}.json`)
		.then(response => {
			return response.data;
		})
	},
};