import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Category from './components/Category';
import Page from './components/Page';

const App = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path='/' component={Category} />
			<Route path='/:page' component={Page} />
		</Switch>
	</BrowserRouter>
);

export default App;
