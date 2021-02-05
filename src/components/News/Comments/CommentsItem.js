import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { IconItem } from '../../common/IconItem';
import { CommentText } from '../../common/CommentText';
import KidsItem from './KidsItem';

const CommentsItem = ({ comment, kids, getKidsComments}) => {
	const date = moment.unix(comment.time);

	return (
		<Media className="mb-5 mt-3">
			<Media.Body className="fs-5">
				<h5 style={{fontWeight:"700"}} className="text-warning mb-3">{comment.by}</h5>
				<div className="pl-5">
					<CommentText text={comment.text}/>
				</div>
				<div className="d-flex date-time pl-5 mt-3 text-black-50">
					<IconItem 
						icon={'fa fa-calendar-o'}
						text={date.format('LTS')} />
					<IconItem 
						icon={'fa fa-clock-o'}
						text={date.format('LL')}
						classValue={'ml-4'} />
					<IconItem 
						icon='far fa-comments'
						text={comment.kids
							? comment.kids.length
							: 0
							}
						classValue={'ml-4'}/>
					{comment.kids
						? <div className='btn__more' onClick={ () => {getKidsComments(comment.kids)} }>Comments</div>
						: <div></div>
					}
				</div>
				{kids.length && kids[0].parent === comment.id
					? kids.map(item => <KidsItem kid={item} key={item.id} />)
					: <div></div>
				}
			</Media.Body>
		</Media>
	)
}

export default CommentsItem;