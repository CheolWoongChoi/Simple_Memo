import { addMemo, deleteMemo, modifyMemo } from './actions';

export interface Memo {
	id: number;
	content?: string;
	createdAt: string;
}

export interface MemoState {
	memos: Memo[];
	deletedMemos: Memo[];
}

export type MemoAction = 
	| ReturnType<typeof addMemo>
	| ReturnType<typeof modifyMemo>
	| ReturnType<typeof deleteMemo>

