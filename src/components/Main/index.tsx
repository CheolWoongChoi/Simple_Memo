
import * as React from 'react';
import { FunctionComponent, ReactElement } from 'react';
import './Main.scss';

interface MainProps {
	children?: ReactElement | string | null;
}

const Main: FunctionComponent<MainProps> = ({ children }) => {
	return (
		<div className='component-main'>
			{children}
		</div>
	);
}

export default Main;
