import React from 'react';
import { Link } from "react-router-dom";

const Home = () => (
	<div>
		<h1>home</h1>
		<Link to='/login' className='btn btn-primary'>hello</Link>
	</div>
);

export default Home;
