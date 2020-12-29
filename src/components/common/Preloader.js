import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

export const Preloader = () => (
	<div>
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
		<Spinner animation="border" variant="warning" />
	</div>
);