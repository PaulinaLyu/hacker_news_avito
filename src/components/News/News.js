import React from 'react';
import NewsItem from './NewsItem';

const News = (props) => (
	<>
		<NewsItem newsProfile={props.newsProfile}/>
	</>
)

export default News;