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

			<nav className='navbar navbar-expand-lg navbar-light bg-primary'>
				<div className='container-fluid'>
					<img
						src='https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png'
						width='35' height='35' className='d-inline-block align-top' alt=''
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
								<a className='nav-link active text-white' aria-current='page' href='/'>Home |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link  text-white'>About Us |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link  text-white' href='/contactUs'>Contact Us |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link  text-white' href='/userGuide'>User Guide |</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link active text-white' aria-current='page' href='/registration'>Registration |</a>
							</li>

							<li className='nav-item'>
								<a className='nav-link text-white' href='/login'>Login |</a>
							</li>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Download Materials</span>
								}
							>
								<NavDropdown.Item href='/workshop/templates'> workshop PowerPoint Templates </NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/research/templates'>Research Papers Templates</NavDropdown.Item>

							</NavDropdown>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Workshop</span>
								}
								id='navbarScrollingDropdown'
							>
								{/* <NavDropdown.Item href='/researchWorkshop/publish'>Workshop </NavDropdown.Item>*/}
								<NavDropdown.Item href='/researchWorkshopView/view'>View</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href='/workshop/templates'>Templates</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown
								title={
									<span className='text-white my-auto'>Research Papers</span>
								}
								id='navbarScrollingDropdown'
							>
								{/* <NavDropdown.Item href='/research/publish'>Publish</NavDropdown.Item>*/}
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
									{/* <input*/}
									{/*	className='float-right p-2 bg-light border' type='search'*/}
									{/*	placeholder='Search' aria-label='Search'*/}
									{/* />*/}
									{/* <button className='btn btn btn-dark mb-2' type='submit'>Search</button>*/}

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
