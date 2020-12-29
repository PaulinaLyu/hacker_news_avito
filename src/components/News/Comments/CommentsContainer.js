import React from 'react';
import { connect } from 'react-redux';
import { getComment } from '../../../redux/newsReducer';
import Comments from './Comments';

class CommentsContainer extends React.Component {
	componentDidMount() {
		// let commentsIds = this.comments;
		// console.log(commentsIds);
		// commentsIds.forEach((id) =>this.props.getComment(id))
	}

	render() {
		return <Comments comment={this.props.comment}/>
	}
}
let mapStateToProps = (state) => {
	return {
		comment: state.newsPage.comment

	}
}

export default connect(mapStateToProps, { getComment }) (CommentsContainer);