import React from 'react';
import Button from 'react-bootstrap/Button';

export const CommonButton = (props) => (
		<Button className='mb-4' variant="outline-warning">
			<i className={`fas ${props.icon}`}></i>
		</Button>
);