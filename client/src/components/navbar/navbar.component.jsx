import React from 'react';
import { Form, Nav, Navbar,NavDropdown } from "react-bootstrap";
import { FormControl } from "@material-ui/core";
import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

export default function NavbarComponent()
{
	return (
		<div>
			<nav className="navbar navbar-expand-lg navbar-light bg-secondary">
				<div className="container-fluid">
					<img
						src="https://i.pinimg.com/originals/31/8d/a3/318da3082926e54402950eaf0d7f68ba.png"
						width="30" height="30" className="d-inline-block align-top" alt=""/>


					<a className="navbar-brand text-info" href="#">ICAF</a>

					<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
							aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="/">Home |</a>
							</li>
							<li className="nav-item">
								<a className="nav-link  text-dark">About Us |</a>
							</li>


							<li className="nav-item">
								<a className="nav-link text-dark">Download Materials |</a>
							</li>


							<NavDropdown  title="Research Workshop" id="navbarScrollingDropdown">
								<NavDropdown.Item href="/researchWorkshop/publish">Workshop </NavDropdown.Item>
								<NavDropdown.Item href="/researchWorkshopView/view">View</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/researchWorkshopCall">Call For Workshop</NavDropdown.Item>
							</NavDropdown>

							<NavDropdown  title="Research Papers" id="navbarScrollingDropdown">
								<NavDropdown.Item href="/research/publish">Publish</NavDropdown.Item>
								<NavDropdown.Item href="/research/view">View</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="/research/templates">Templates</NavDropdown.Item>
							</NavDropdown>

							<li className="nav-item">
								<form
									style={{
										marginLeft: 400,
									}}
								>

									<input className="float-right p-2 bg-light border" type="search"
										   placeholder="Search" aria-label="Search"/>
									<button className="btn btn btn-dark mb-2" type="submit">Search</button>
								</form>
							</li>
						</ul>


					</div>

				</div>

			</nav>
		</div>
	);
}
