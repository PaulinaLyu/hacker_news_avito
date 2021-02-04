import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Logo from './Logo';

const Header = () => (
	<div bg='warning' className="d-flex align-items-center justify-content-between py-3 mb-5 bg-warning">
		<Container>
			<Row className="d-flex align-items-center justify-content-between">
				<Logo />
			</Row>
		</Container>
	</div>
)

export default Header;