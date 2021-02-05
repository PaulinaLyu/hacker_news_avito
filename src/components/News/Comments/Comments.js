import React from 'react';
import { Preloader } from '../../common/Preloader';
import CommentsItem from './CommentsItem';

const Comments = ({ comments, getKidsComments, kids }) => (
	<> 
		{comments.map(item => <CommentsItem comment={item} 
											key={item.id} 
											getKidsComments={getKidsComments} 
											kids={kids} />)}
	</>
);

export default Comments;