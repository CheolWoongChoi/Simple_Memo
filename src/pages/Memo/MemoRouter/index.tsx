
import * as React from 'react';
import { FunctionComponent } from 'react';
import { Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom';
import MemoView from '../MemoView';
import MemoAdd from '../MemoAdd';

const MemoRouter: FunctionComponent<RouteComponentProps> = props => {
	const { match } = props;

	return (
		<Switch>
			<Route path={`${match.url}/add`} component={MemoAdd} />
			<Route path={`${match.url}/:id`} component={MemoView} />
		</Switch>
	)
}

export default withRouter(MemoRouter);