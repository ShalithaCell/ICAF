import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const MainNavbar = (props) =>
{
	const navigate = useNavigate();

	return (
		<AppBar
			elevation={0}
			{...props}
		>
			<Toolbar sx={{ height: 64 }}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						News
					</Typography>
					<Button color='inherit' onClick={() => navigate('/login')}>Login</Button>
					<Button color='inherit' onClick={() => navigate('/researchWorkshop/publish')}>Workshop</Button>
					<Button color='inherit' onClick={() => navigate('/researchWorkshopView/view')}>View</Button>
					<Button color='inherit' onClick={() => navigate('/researchWorkshopCall/view')}>Call For Workshop</Button>
					<Button color='inherit' onClick={() => navigate('/research/publish')}>Publish</Button>
					<Button color='inherit' onClick={() => navigate('/research/view')}>View</Button>
					<Button color='inherit' onClick={() => navigate('/research/templates')}>Templates</Button>

				</Toolbar>
			</Toolbar>
		</AppBar>
	);
};

export default MainNavbar;
