
import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RootState } from 'src/store';
import { Memo } from 'src/store/memos';

interface MemoViewParams {
	id: string
}

const MemoView: FunctionComponent<RouteComponentProps<MemoViewParams>> = (props) => {
	const { memos } = useSelector((state: RootState) => state.memos);
	const { match: { params } } = props;

	const memo = memos.find((memo: Memo) => memo.id === Number(params.id));

	return (
		<>
			<p>
				{`createdAt: ${memo?.createdAt}`}
			</p>
			<p>
				{memo?.content}
			</p>
		</>
	);
}

export default withRouter(MemoView);