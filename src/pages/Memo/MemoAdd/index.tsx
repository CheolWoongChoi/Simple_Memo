import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as moment from 'moment';
import { RootState } from 'store';
import { addMemo } from 'store/memos';
import './MemoAdd.scss';

const MemoAdd: FunctionComponent = () => {
	const dispatch = useDispatch();
	const history =	useHistory();
	const { memos } = useSelector((state: RootState) => state.memos);

	const handleAddMemo = () => {
		const memoLength = memos.length;
		const id = memoLength ? (memos[memoLength - 1].id as number) + 1 : 1;
		const createdAt = moment().format('YYYY-MM-DD HH:mm:ss');
		const content = document.querySelector('textarea')?.value;

		if (!content) {
			alert('콘텐츠가 없습니다.');
			return;
		}

		if (memoLength === 10) {
			alert('최대 10개까지만 추가할 수 있습니다.');
			return;
		}

		dispatch(addMemo({ id, createdAt, content }));
		alert(`메모 ${id}가 추가되었습니다.`);

		history.push('/memo');
	};

	return (
		<div className='memo-add'>
			<div>
				<button onClick={handleAddMemo}>추가</button>
			</div>
			<textarea></textarea>
		</div>
	);
}

export default MemoAdd;