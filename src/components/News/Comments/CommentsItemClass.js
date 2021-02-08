import React from 'react';
import Media from 'react-bootstrap/Media';
import moment from 'moment';
import { IconItem } from '../../common/IconItem';
import KidsItem from './KidsItem';

class CommentsItem extends React.Component {
	// componentDidMount() {
	// 	if (document.getElementById(`parent${this.props.comment.id}`)) {
	// 		document.getElementById(`parent${this.props.comment.id}`).insertAdjacentHTML('afterbegin', this.props.comment.text)
	// 	}
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.comment.id !== this.props.comment.id)
		document.getElementById(`parent${this.props.comment.id}`).insertAdjacentHTML('afterbegin', this.props.comment.text)
	}

	render() {
		const date = moment.unix(this.props.comment.time);
		return (
			<Media className="mb-5 mt-3">
				<Media.Body className="fs-5">
					<h5 style={{fontWeight:"700"}} className="text-warning mb-3">{this.props.comment.by}</h5>
					<div className="pl-5" id={`parent${this.props.comment.id}`}></div>
					<div className="d-flex date-time pl-5 mt-3 text-black-50">
						<IconItem 
							icon={'fa fa-calendar-o'}
							text={date.format('LTS')} />
						<IconItem 
							icon={'fa fa-clock-o'}
							text={date.format('LL')}
							classValue={'ml-4'} />
						<IconItem 
							icon='far fa-comments'
							text={this.props.comment.kids
								? this.props.comment.kids.length
								: 0
								}
							classValue={'ml-4'}/>
						{this.props.comment.kids
							? <div className='btn__more' onClick={ () => {getKidsComments(this.props.comment.kids)} }>Comments</div>
							: <div></div>
						}
					</div>
					{this.props.kids.length && this.props.kids[0].parent === this.props.comment.id
						? this.props.kids.map(item => <KidsItem kid={item} key={item.id} />)
						: <div></div>
					}
				</Media.Body>
			</Media>
		)
	}
}

export default CommentsItem;