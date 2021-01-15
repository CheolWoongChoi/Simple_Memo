
import { memosData } from 'src/constants';
import { MemoState, MemoAction } from './types';
import { ADD_MEMO, MODIFY_MEMO, DELETE_MEMO } from './actions';

const initialState: MemoState = {
	memos: memosData,
	deletedMemos: [],
}

export default function (state: MemoState = initialState, action: MemoAction) {
	switch(action.type) {
		case ADD_MEMO: 
			return {
				...state,
				memos: [...state.memos, action.payload]
			};
		case MODIFY_MEMO: {
			const { memos } = state;
			const { id, createdAt, content } = action.payload;
			const memo = memos.find(memo => memo.id === id)!;

			memo.createdAt = createdAt;
			memo.content = content;
			
			return {
				...state,
			}
		}
		case DELETE_MEMO: {
			const { memos, deletedMemos } = state;
			const newMemos = memos.filter(memo => memo.id !== action.payload); 
			const memo = memos.find(memo => memo.id === action.payload)!;

			return {
				...state,
				memos: newMemos,
				deletedMemos: [...deletedMemos, memo ]
			}
		}
		default:
			return state;
	}
}
