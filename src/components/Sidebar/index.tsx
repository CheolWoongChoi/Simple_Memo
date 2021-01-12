import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import './Sidebar.scss';

interface SidebarProps {
	children?: ReactElement | ReactElement[]
}

const Sidebar: FunctionComponent<SidebarProps> = ({ children }) => {
	return (
		<ul className='component-sidebar'>
			{children}
		</ul>
	)
};

export default Sidebar;