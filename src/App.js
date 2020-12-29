import React from 'react';
import { Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import MainContainer from './components/Main/MainContainer';
import NewsContainer from './components/News/NewsContainer';
import Header from './components/Header/Header';

function App() {
  	return (
    	<>
  			<Header />
			<Container>
				<Row>
  					<Route exact path='/' 
    					render={ () => <MainContainer /> } />

					<Route path='/news/:newsId?' 
    					render={ () => <NewsContainer /> } />
				</Row>
			</Container>
			
		</>
  	)

}

export default App;