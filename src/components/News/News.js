import React from 'react';
import NewsItem from './NewsItem';
import Comments from './Comments/Comments';
import { CommonButton } from '../common/CommonButton'

const News = (props) =>(
	<>
		<NewsItem newsProfile={props.newsProfile}/>
		<div className='d-flex d-flex flex-column w-100'>
			<h3 className="mt-5 mb-4">Comments</h3>
			<CommonButton icon={'fa-sync-alt'} />
			{props.comments.length
				? <Comments comments={props.comments} />
				: <h5>No comments</h5>
			}
		</div>
	</>
)

export default News;