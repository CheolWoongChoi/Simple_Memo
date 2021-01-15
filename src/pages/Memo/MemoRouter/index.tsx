
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import MemoView from '../MemoView';
import MemoAdd from '../MemoAdd';

const MemoRouter: FunctionComponent = () => {
	const match = useRouteMatch();

	return (
		<Switch>
			<Route path={`${match.url}/add`} component={MemoAdd} />
			<Route path={`${match.url}/:id`} component={MemoView} />
		</Switch>
	);
}

export default MemoRouter;