import { combineReducers } from 'redux';
import memos from './memos';

const rootReducer = combineReducers({
	memos
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
