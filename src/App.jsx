import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Page from './components/Page';
import Header from './components/Header';
import Footer from './components/Footer';
import ContentComponent from './components/ContentComponent';

const App = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route exact path='/' component={ContentComponent} />
				<Route path='/:page' component={Page} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
);

export default App;
