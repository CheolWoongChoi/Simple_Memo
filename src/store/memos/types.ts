import { addMemo, deleteMemo } from './actions';

export interface Memo {
	id?: number;
	content: string;
	createdAt?: string;
}

export interface MemoState {
	memos: Memo[];
}

export type MemoAction = 
	| ReturnType<typeof addMemo>
	| ReturnType<typeof deleteMemo>

