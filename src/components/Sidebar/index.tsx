import * as React from 'react';
import { FunctionComponent } from 'react';
import './Sidebar.scss';

interface Props {

}

const Sidebar: FunctionComponent<Props> = () => {
	return (
		<ul className='component-sidebar'>
			<li>
				폴더
			</li>
			<li>
				1
			</li>
			<li>
				2
			</li>
		</ul>
	)
};

export default Sidebar;