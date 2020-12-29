import React from 'react';
import { connect } from 'react-redux';
import { getNews } from '../../redux/newsReducer';
import News from './News';

class NewsContainer extends React.Component {
	componentDidMount() {
		this.props.getNews(25569925);
	}

	render() {
		return <News {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		newsProfile: state.newsPage.newsProfile,

	}
}

export default connect(mapStateToProps, { getNews }) (NewsContainer);