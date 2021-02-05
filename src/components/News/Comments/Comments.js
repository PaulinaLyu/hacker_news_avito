import React from 'react';
import CommentsItem from './CommentsItem';
import { Preloader } from '../../common/Preloader';

const Comments = ({ comments, getKidsComments, kids, 
	commentsLength, deleteCommentsCount }) => {
		return (
			<> 
				{comments.length && comments.length !== commentsLength - deleteCommentsCount
					? <Preloader /> 
					: comments.map(item => <CommentsItem comment={item} 
														key={item.id} 
														getKidsComments={getKidsComments} 
														kids={kids} />)
				}
			</>
		)
	}


export default Comments;