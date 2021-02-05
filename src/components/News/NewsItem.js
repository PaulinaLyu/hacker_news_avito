import React from 'react';
import { Col } from 'react-bootstrap';
import moment from 'moment';
import { IconItem } from '../common/IconItem';
import { LinkItem } from '../common/Link';

const NewsItem = ({ newsProfile, commentsCount }) => {
	const date = moment.unix(newsProfile.time);
	return (
		<div className="d-flex mt-3">
			<Col sm={2} className='pl-0'>
				<div className="d-flex flex-column align-items-start">
					<div><span>{date.format('MMMM, YYYY')}</span></div>
					<div style={{fontSize: "30px", fontWeight:"700"}}>{date.format('DD')}</div>
					<div className="text-warning"><span>{date.format('LTS')}</span></div>
				</div>
			</Col>
			<Col sm={10}>
				<div className="mb-5 ml-3 pl-5 border-left border-warning">
						<h3>{newsProfile.title}</h3>
						<IconItem 
							icon={'fas fa-user-alt'}
							text={newsProfile.by}
							classValue={'mt-2 mb-2 text-black-50'} />
						<IconItem 
							icon='fas fa-comments'
							text={newsProfile.kids
									? commentsCount
									: 0
								}
							classValue={'mt-2 mb-2 text-black-50'} />
						<LinkItem url={newsProfile.url} 
							icon={'fas fa-arrow-right'} 
							text={'News link'} />
				</div>
			</Col>
		</div>
	)
}

export default NewsItem;