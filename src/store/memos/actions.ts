import { Memo } from './types';

export const ADD_MEMO = 'memo/ADD_MEMO' as const;
export const MODIFY_MEMO = 'memo/MODIFY_MEMO' as const;
export const DELETE_MEMO = 'memo/DELETE_MEMO' as const;

export const addMemo = (memo: Memo) => ({
	type: ADD_MEMO,
	payload: memo
});

export const modifyMemo = (memo: Memo) => ({
	type: MODIFY_MEMO,
	payload: memo
})

export const deleteMemo = (id: number) => ({
	type: DELETE_MEMO,
	payload: id
});
