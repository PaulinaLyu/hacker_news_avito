import React from 'react';
import CommentsItem from './CommentsItem';

const Comments = ({ comments }) => (
	<> 
		{comments.map(item => <CommentsItem comment={item} key={item.id} />)}
	</>
);

export default Comments;