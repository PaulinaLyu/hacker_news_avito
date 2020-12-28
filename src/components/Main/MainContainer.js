import React from 'react';
import { connect } from 'react-redux';
import { getNewsIds } from '../../redux/mainReducer';
import Main from './Main';

class MainContainer extends React.Component {
	componentDidMount() {
		this.props.getNewsIds();
	}

	render() {
		return <Main news={this.props.news}/>
	}
}

let mapStateToProps = (state) => {
	return {
		news: state.mainPage.news,
	}
}


export default connect(mapStateToProps, { getNewsIds }) (MainContainer);