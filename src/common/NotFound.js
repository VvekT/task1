import React from 'react';
import { Link } from 'react-router-dom';

import './index.scss'

const NotFound = () => (
    <div className="container">
		<div className="fourzerofour">
			<h1>404</h1>
			<p>page not found</p>
            <Link to="/">Go Home</Link>
		</div>
	</div>
);

export default NotFound;