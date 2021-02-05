import React from 'react';
import NewsItem from './NewsItem';
import Comments from './Comments/Comments';
import { CommonButton } from '../common/CommonButton'
import { LinkItem } from '../common/Link';

const News = ({ newsProfile, comments, kids, 
	commentsCount, updateComments, getKidsComments, 
	deleteCommentsCount }) => (
	<>
		<LinkItem url={'/'} text={'Back'} icon={'fas fa-arrow-left'} />
		<NewsItem newsProfile={newsProfile} 
					commentsCount={commentsCount}/>
		<div className='d-flex flex-column w-100 mt-3'>
			<h3 className="mb-4">Comments</h3>
			<CommonButton icon={'fa-sync-alt'} 
						onClickFunction={updateComments} 
						id={newsProfile.kids} />
			{comments.length
				? <Comments comments={comments} 
							getKidsComments={getKidsComments} 
							kids={kids}
							commentsLength={newsProfile.kids.length}
							deleteCommentsCount={deleteCommentsCount}
							/>
				: <h5>No comments</h5>
			}
		</div>
	</>
)

export default News;