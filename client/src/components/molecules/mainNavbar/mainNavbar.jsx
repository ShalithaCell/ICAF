import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from '../../../assets/images/logo.png';

const MainNavbar = (props) => (
	<AppBar
		elevation={0}
		{...props}
	>
		<Toolbar sx={{ height: 64 }}>
			<RouterLink to='/'>
				<img
					alt='Logo'
					src={logo}
					{...props}
				/>
			</RouterLink>
		</Toolbar>
	</AppBar>
);

export default MainNavbar;
