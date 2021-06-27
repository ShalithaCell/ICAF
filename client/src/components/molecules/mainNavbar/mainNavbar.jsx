import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { NavDropdown } from "react-bootstrap";

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
					<Button color='inherit'>
						<NavDropdown title='ResearchPapers' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/research/publish'>Publish</NavDropdown.Item>
							<NavDropdown.Item href='/research/view'>View</NavDropdown.Item>
							<NavDropdown.Item href='/research/templates'>Templates</NavDropdown.Item>
						</NavDropdown>
					</Button>
					<Button>
						<NavDropdown title='WorkShops' id='basic-nav-dropdown'>
							<NavDropdown.Item href='/researchWorkshop/publish'>Workshop</NavDropdown.Item>
							<NavDropdown.Item href='/researchWorkshopCall/view'>Call For Workshop</NavDropdown.Item>
							<NavDropdown.Item href='/researchWorkshopView/view'>View</NavDropdown.Item>
						</NavDropdown>
					</Button>
					<Button color='inherit' onClick={() => navigate('/contactUs')}>contact Us</Button>
				</Toolbar>
			</Toolbar>
		</AppBar>
	);
};
// <Button color='inherit'>
// 						<NavDropdown title='ResearchPapers' id='basic-nav-dropdown'>
// 							<NavDropdown.Item href='/research/publish'>Publish</NavDropdown.Item>
// 							<NavDropdown.Item href='/research/view'>View</NavDropdown.Item>
// 							<NavDropdown.Item href='/research/templates'>Templates</NavDropdown.Item>
// 						</NavDropdown>
// 					</Button>
// 					<Button>
// 						<NavDropdown title='WorkShops' id='basic-nav-dropdown'>
// 							<NavDropdown.Item href='/researchWorkshop/publish'>Workshop</NavDropdown.Item>
// 							<NavDropdown.Item href='/researchWorkshopCall/view'>Call For Workshop</NavDropdown.Item>
// 							<NavDropdown.Item href='/researchWorkshopView/view'>View</NavDropdown.Item>
// 						</NavDropdown>
// 					</Button>

export default MainNavbar;
