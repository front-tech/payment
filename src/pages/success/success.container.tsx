import './success.container.css';
import React, { useEffect } from 'react';

export const Success = (props: any) => {


	useEffect(() => {
	}, []);


	return (
		<div>
			<h1> Has comprado un tractor, eres afortunado</h1>
			<button className="button button1"> GO HOME</button>
		</div>
	);
};

export default Success
