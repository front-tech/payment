import './success.container.css';
import React, { useEffect } from 'react';
import { navigateToUrl } from 'single-spa';
export const Success = (props: any) => {


	useEffect(() => {
	}, []);
	const redirectHome = (e) => {
		e.preventDefault();
		navigateToUrl('/');
	}

	return (
		<div>
			<h1>Enhorabuena!</h1>
			<button className="button button1" onClick={(e) => redirectHome(e)} > GO HOME </button>
		</div>
	);
};

export default Success
