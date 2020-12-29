import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';

const CommentsItem = ({ comment }) => {
	const date = moment.unix(comment.time);
	return (
		<Media className="mb-5 mt-3">
			<Media.Body>
				<h5 style={{fontWeight:"700"}} className="text-warning mb-3">{comment.by}</h5>
				<p className="pl-5">{comment.text}</p>
				<div className="d-flex date-time pl-5 text-black-50">
					<div><i className="fa fa-calendar-o"></i><span className="ml-2">{date.format('LTS')}</span></div>
					<div className="ml-3"><i className="fa fa-clock-o"></i><span className="ml-2">{date.format('LL')}</span></div>
				</div>
			</Media.Body>
		</Media>
	)
}

export default CommentsItem;