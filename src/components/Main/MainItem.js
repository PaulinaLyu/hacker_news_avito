import React from 'react';
// import { NavLink } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { mapTime } from '../../mappers/mapTime';
import moment from 'moment'

const MainItem = ({ news }) => {
	const date = moment.unix(news.time);
	return (
		// <NavLink to="/newspage">
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
								<div><i className="fas fa-user-alt"></i><span className="ml-2">{news.by}</span></div>
								<div className="ml-3"><i className="fas fa-star"></i><span className="ml-2">{news.score}</span></div>
							</div>
							<div className="d-flex fs-6 date-time">
								<div><i className="fa fa-calendar-o"></i><span className="ml-2">{moment.unix(news.time).format('LTS')}</span></div>
								<div className="ml-3"><i className="fa fa-clock-o"></i><span className="ml-2">{date.format('LL')}</span></div>
							</div>
						</div>
					</div>
					</div>
				</Card.Body>
			</Card>
		// </NavLink>
	)
};

export default MainItem;