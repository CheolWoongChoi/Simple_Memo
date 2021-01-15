import * as React from 'react';
import { FunctionComponent } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import DeletedMemoView from '../DeletedMemoView';

const TrashRouter: FunctionComponent = () => {
	const match = useRouteMatch();
	
	return (
		<Switch>
			<Route path={`${match.url}/:id`} component={DeletedMemoView} />
		</Switch>
	);
}

export default TrashRouter;