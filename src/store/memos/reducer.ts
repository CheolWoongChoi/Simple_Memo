
import { memosData } from 'src/constants';
import { MemoState, MemoAction } from './types';
import { ADD_MEMO, DELETE_MEMO } from './actions';


const initialState: MemoState = {
	memos: memosData
}

function memos(state: MemoState = initialState, action: MemoAction) {
	switch(action.type) {
		case ADD_MEMO:
			return {
				...state,
			};
		case DELETE_MEMO:
			return {
				...state,
			}
		default:
			return state;
	}
}

export default memos;