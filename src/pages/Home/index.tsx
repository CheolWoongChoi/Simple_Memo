import * as React from 'react';
import { FunctionComponent } from 'react';
import Layout from 'components/Layout';
import Sidebar from 'components/Sidebar';
import Main from 'components/Main';
import ListItem from 'components/ListItem';
import { Link } from 'react-router-dom';
import './Home.scss';

const Home: FunctionComponent = () => {
	return (
		<Layout>
			<Sidebar>
				<ListItem isTitle>
					폴더
				</ListItem>
				<ListItem>
					<Link to='/memo'>메모</Link>
				</ListItem>
				<ListItem>
					<Link to='/trash'>휴지통</Link>
				</ListItem>
			</Sidebar>
			<Main>
				<Link to='/memo/add'>새로운 메모</Link>
			</Main>
		</Layout>
	);
}

export default Home;