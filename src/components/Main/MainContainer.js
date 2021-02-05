import React from 'react';
import { connect } from 'react-redux';
import { getNewsIds } from '../../redux/mainReducer';
import { Preloader } from '../common/Preloader';
import Main from './Main';

class MainContainer extends React.Component {
	componentDidMount() {
		this.props.getNewsIds();
	}

	render() {
		return (
			this.props.news.length !== 50
				? <Preloader /> 
				: <Main {...this.props} /> 
		)
	}
}

let mapStateToProps = (state) => {
	return {
		news: state.mainPage.news,
	}
}

export default connect(mapStateToProps, { getNewsIds }) (MainContainer);