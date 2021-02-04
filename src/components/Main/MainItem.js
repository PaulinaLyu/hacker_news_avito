import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment'
import Card from 'react-bootstrap/Card';
import { mapTime } from '../../mappers/mapTime';
import { IconItem } from '../common/IconItem';

const MainItem = ({ news }) => {
	const date = moment.unix(news.time);
	return (
		<NavLink to={`/news/${news.id}`}>
			<Card className="mb-3 w-100">
				<Card.Body>
					<div className="d-flex align-items-center justify-content-start">
					<div className="mr-4">
						<div className="text-warning">
							<h5>{mapTime(news.time)}</h5>
						</div>
					</div>
					<div className="ml-2  w-100">
						<h5>{news.title}</h5>
						<div className="d-flex mt-2 justify-content-between">
							<div className="d-flex text-black-50">
								<IconItem 
									icon={'fas fa-user-alt'}
									text={news.by}  />
								<IconItem 
									icon={'fas fa-star'}
									text={news.score}
									style={'ml-3'}/>
								<IconItem 
									icon={'fas fa-comments'}
									text={news.kids
										? news.kids.length
										: 0
									}
									style={'ml-3'}/>
							</div>
							<div className="d-flex fs-6 date-time">
								<IconItem 
									icon={'fa fa-calendar-o'}
									text={date.format('LTS')}
									style='' />
								<IconItem
									style={'ml-3'}
									icon={'fa fa-clock-o'}
									text={date.format('LL')} />
							</div>
						</div>
					</div>
					</div>
				</Card.Body>
			</Card>
		</NavLink>
	)
};

export default MainItem;