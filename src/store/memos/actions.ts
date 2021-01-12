
export const ADD_MEMO = 'memo/ADD_MEMO' as const;
export const DELETE_MEMO = 'memo/DELETE_MEMO' as const;

export const addMemo = () => ({
	type: ADD_MEMO
});

export const deleteMemo = () => ({
	type: DELETE_MEMO
});
