import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logo from './Logo';

const Header = () => (
	<div className="d-flex align-items-center justify-content-between border-bottom border-2 border-warning py-3 mb-5">
		<Container>
			<Row className="d-flex align-items-center justify-content-between px-3">
				<Logo />
			</Row>
		</Container>
	</div>
)

export default Header;