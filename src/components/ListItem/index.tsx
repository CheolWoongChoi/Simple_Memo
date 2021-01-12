import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import './ListItem.scss';

interface ListItemProps {
	isTitle?: boolean;
	children?: ReactElement | string;
}

const ListItem: FunctionComponent<ListItemProps> = ({ isTitle, children }) => {
	return (
		<li className={`${isTitle ? 'component-list-item-title': 'component-list-item'}`}>
			{children}
		</li>
	);
};

export default ListItem;