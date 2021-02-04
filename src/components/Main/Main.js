import React from 'react';
import MainItem from './MainItem';
import { CommonButton } from '../common/CommonButton';

const Main = ({ news, getNewsIds }) => {
	return(
	<div className='d-flex flex-column w-100'>
		<CommonButton icon={'fa-sync-alt'} onClickFunction={getNewsIds}/>
		{news.map(item => <MainItem news={item} key={item.id} />)}
	</div>
)}
export default Main;