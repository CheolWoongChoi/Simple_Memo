import * as React from 'react';
import { FunctionComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from 'pages/Home';
import Memo from 'pages/Memo';
import Trash from 'pages/Trash';

const App: FunctionComponent = () => {
	console.log('app');

	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/memo' component={Memo} />
				<Route path='/trash' component={Trash} />
				<Redirect path='*' to='/' />
			</Switch>
		</BrowserRouter>
	);
}

export default App;