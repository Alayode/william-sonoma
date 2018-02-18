import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ContentComponent from './components/ContentComponent';

const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={ContentComponent} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default App;
