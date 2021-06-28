import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AppBar, Toolbar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Form, Nav, Navbar, NavDropdown } from "react-bootstrap";

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
					<img
						src='https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png'
						width='30' height='30' className='d-inline-block align-top' alt=''
					/>

					<li className='nav-item'>
						<a className='nav-link active' aria-current='page' href='/'>Home |</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link  text-dark'>About Us |</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link  text-dark' href='/contactUs'>Contact Us |</a>
					</li>
					<li className='nav-item'>
						<a className='nav-link active' aria-current='page' href='/'>News |</a>
					</li>

					<li className='nav-item'>
						<a className='nav-link text-dark' href='/login'>Login |</a>
					</li>

					<li className='nav-item'>
						<a className='nav-link text-dark'>Download Materials |</a>
					</li>

					<NavDropdown title='Research Workshop' id='navbarScrollingDropdown'>
						<NavDropdown.Item href='/researchWorkshop/publish'>Workshop </NavDropdown.Item>
						<NavDropdown.Item href='/researchWorkshopView/view'>View</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/researchWorkshopCall'>Call For Workshop</NavDropdown.Item>
					</NavDropdown>

					<NavDropdown title='Research Papers' id='navbarScrollingDropdown'>
						<NavDropdown.Item href='/research/publish'>Publish</NavDropdown.Item>
						<NavDropdown.Item href='/research/view'>View</NavDropdown.Item>
						<NavDropdown.Divider />
						<NavDropdown.Item href='/research/templates'>Templates</NavDropdown.Item>
					</NavDropdown>


				</Toolbar>
			</Toolbar>
		</AppBar>
	);
};

export default MainNavbar;
