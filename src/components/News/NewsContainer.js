import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { getNewsProfile } from '../../redux/newsReducer';
import News from './News';

class NewsContainer extends React.Component {
	componentDidMount() {
		let newsId = this.props.match.params.newsId;
		this.props.getNewsProfile(newsId);
	}

	render() {
		return <News {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return {
		newsProfile: state.newsPage.newsProfile,
		comments: state.newsPage.comments

	}
}

export default compose (
	connect(mapStateToProps, { getNewsProfile }),
	withRouter
)(NewsContainer);
