import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Preloader = () => (
	<div className='preloader'>
		<div className='preloader__inner'>
			<Spinner animation="border" variant="warning" />
			<Spinner animation="border" variant="warning" />
			<Spinner animation="border" variant="warning" />
		</div>
	</div>
);

export const CommentsPreloader = () => (
	<>
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
	</>
);