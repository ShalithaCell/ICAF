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
			{/* <Toolbar sx={{ height: 64 }}>*/}
			{/*	<Toolbar>*/}
			{/*		<IconButton*/}
			{/*			size='large'*/}
			{/*			edge='start'*/}
			{/*			color='inherit'*/}
			{/*			aria-label='menu'*/}
			{/*			sx={{ mr: 2 }}*/}
			{/*		>*/}
			{/*			<MenuIcon />*/}
			{/*		</IconButton>*/}
			{/*		<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>*/}
			{/*			News*/}
			{/*		</Typography>*/}
			{/* <Button color='inherit' onClick={() => navigate('/login')}>Login</Button>*/}
			{/* <Button color='inherit' onClick={() => navigate('/researchWorkshop/publish')}>Workshop</Button>*/}
			{/* <Button color='inherit' onClick={() => navigate('/researchWorkshopView/view')}>View</Button>*/}
			{/* eslint-disable-next-line max-len */}
			{/* <Button color='inherit' onClick={() => navigate('/researchWorkshopCall/view')}>Call For Workshop</Button>*/}
			{/* <Button color='inherit' onClick={() => navigate('/research/publish')}>Publish</Button>*/}
			{/* <Button color='inherit' onClick={() => navigate('/research/view')}>View</Button>*/}
			{/* <Button color='inherit' onClick={() => navigate('/research/templates')}>Templates</Button>*/}

			{/* <NavDropdown  title="Research Workshop" id="navbarScrollingDropdown" className="text-white">*/}
			{/*	<NavDropdown.Item href="/researchWorkshop/publish">Workshop </NavDropdown.Item>*/}
			{/*	<NavDropdown.Item href="/researchWorkshopView/view">View</NavDropdown.Item>*/}
			{/*	<NavDropdown.Divider />*/}
			{/*	<NavDropdown.Item href="/researchWorkshopCall">Call For Workshop</NavDropdown.Item>*/}
			{/* </NavDropdown>*/}

			{/* <NavDropdown  title="Research Papers" id="navbarScrollingDropdown">*/}
			{/*	<NavDropdown.Item href="/research/publish">Publish</NavDropdown.Item>*/}
			{/*	<NavDropdown.Item href="/research/view">View</NavDropdown.Item>*/}
			{/*	<NavDropdown.Divider />*/}
			{/*	<NavDropdown.Item href="/research/templates">Templates</NavDropdown.Item>*/}
			{/* </NavDropdown>*/}

			<nav className='navbar navbar-expand-lg navbar-light bg-secondary'>
				<div className='container-fluid'>
					<img
						src='https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png'
						width='30' height='30' className='d-inline-block align-top' alt=''
					/>

					<a className='navbar-brand text-info' href='#'>ICAF</a>

					<button
						className='navbar-toggler' type='button' data-bs-toggle='collapse'
						data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon' />
					</button>
					<div className='collapse navbar-collapse' id='navbarNav'>
						<ul className='navbar-nav'>
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
								<a className='nav-link  text-dark' href='/userGuide'>User Guide |</a>
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

							<li className='nav-item'>
								<form
									style={{
										marginLeft : 300,
									}}
								>
									 <input
										className='float-right p-2 bg-light border' type='search'
										   placeholder='Search' aria-label='Search'
									 />
									<button className='btn btn btn-dark mb-2' type='submit'>Search</button>

									<input
										className='float-right p-2 bg-light border' type='search'
										placeholder='Search' aria-label='Search'
									/>
									<button className='btn btn btn-dark mb-2' type='submit'>Search</button>
								</form>
							</li>
						</ul>

					</div>

				</div>

			</nav>

			{/*	</Toolbar>*/}
			{/* </Toolbar>*/}
		</AppBar>
	);
};

export default MainNavbar;
