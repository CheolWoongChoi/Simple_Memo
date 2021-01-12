
import * as React from 'react';
import { FunctionComponent, ReactComponentElement } from 'react';
import './Layout.scss';

interface Props {
	children: ReactComponentElement<any, any>[]
};

const Layout: FunctionComponent<Props> = ({ children }: Props) => {
	return (
		<div className='component-layout'>
			{children}
		</div>
	);
}

export default Layout;