import React from 'react';
import { connect } from 'react-redux';
import News from './News';

class NewsContainer extends React.Component {

	render() {
		return <News/>
	}
}

export default connect(null, {}) (NewsContainer);