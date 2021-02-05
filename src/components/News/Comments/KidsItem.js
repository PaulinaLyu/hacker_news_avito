import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { IconItem } from '../../common/IconItem';
import { CommentText } from '../../common/CommentText';

const KidsItem = ({ kid }) => {
	const date = moment.unix(kid.time);
	return (
		<Media className="mb-4 mt-4 ml-5">
			<Media.Body className="kid">
				<h6 style={{fontWeight:"700"}} className="text-success mb-3">{kid.by}</h6>
				<div className="pl-5">
					<CommentText text={kid.text}/>
				</div>
				<div className="d-flex date-time pl-5 mt-3 text-black-50">
					<IconItem 
						icon={'fa fa-calendar-o'}
						text={date.format('LTS')} />
					<IconItem 
						icon={'fa fa-clock-o'}
						text={date.format('LL')}
						classValue={'ml-4'} />
				</div>
			</Media.Body>
		</Media>
	)
}

export default KidsItem;