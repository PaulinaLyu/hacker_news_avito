import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getNewsProfile, updateComments, getKidsComments } from '../../redux/newsReducer';
import News from './News';
import { Preloader } from '../common/Preloader';

class NewsContainer extends React.Component {
	componentDidMount() {
		let newsId = this.props.match.params.newsId;
		this.props.getNewsProfile(newsId);
	}

	render() {
		return (
			this.props.isLoading
				? <Preloader /> 
				: <News {...this.props} />)
	}
}

let mapStateToProps = (state) => {
	return {
		newsProfile: state.newsPage.newsProfile,
		isLoading: state.mainPage.isLoading,
		comments: state.newsPage.comments,
		kids: state.newsPage.kids,
		commentsCount: state.newsPage.commentsCount,
	}
}

export default compose (
	connect(mapStateToProps, { getNewsProfile, updateComments, getKidsComments }),
	withRouter
)(NewsContainer);
