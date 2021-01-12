import { combineReducers } from 'redux';
import github from './github';
import memos from './memos';

const rootReducer = combineReducers({
	github,
	memos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
