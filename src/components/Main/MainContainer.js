import React from 'react';
import { connect } from 'react-redux';
import Main from './Main';

class MainContainer extends React.Component {

	render() {
		return <Main/>
	}
}


export default connect(null, {}) (MainContainer);