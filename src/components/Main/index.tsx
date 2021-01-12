
import * as React from 'react';
import { FunctionComponent } from 'react';
import './Main.scss';

interface MainProps {
	children?: React.ReactComponentElement<any, any> | null;
}

const Main: FunctionComponent<MainProps> = ({ children }: MainProps) => {
	return (
		<div className='component-main'>
			{children}
		</div>
	);
}

export default Main;
