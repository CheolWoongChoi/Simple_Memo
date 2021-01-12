import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from 'src/store';
import { Memo } from 'src/store/memos'; 
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import ListItem from 'components/ListItem';
import './Trash.scss';

const Trash: FunctionComponent<{}> = () => {
	// const { memos } = useSelector((state: RootState) => state.memos);

	// const renderMemos = (memos: Memo[]) => {
	// 	return memos.map((memo, idx) => (
	// 		<ListItem key={idx}>
	// 			<Link to={`/memo/${memo.id}`}>
	// 				메모 {memo.id} 
	// 			</Link>
	// 		</ListItem>
	// 	));
	// }

	return (
		<Layout>
			<Sidebar>
				<ListItem isTitle>
					<Link to='/'>&lt;</Link>
				</ListItem>
			</Sidebar>
			<Main>
				휴지통
			</Main>
		</Layout>
	);
}

export default Trash;