import React from 'react';
import Button from 'react-bootstrap/Button';

export const CommonButton = ({ icon, onClickFunction, id }) => (
	<Button className='btn mb-4' variant="outline-warning" onClick={ () => {onClickFunction(id)}}>
		<i className={`fas ${icon}`}></i>
	</Button>
);