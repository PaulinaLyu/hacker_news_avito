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
			this.props.isLoading
				? <Preloader /> 
				: <Main news={this.props.news}
				updateNews={this.props.getNewsIds} /> 
		)
	}
}

let mapStateToProps = (state) => {
	return {
		news: state.mainPage.news,
		isLoading: state.mainPage.isLoading
	}
}


export default connect(mapStateToProps, { getNewsIds }) (MainContainer);