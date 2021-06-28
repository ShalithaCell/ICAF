import React from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Dropdown, Row, Col } from "react-bootstrap";
import { Carousel } from "bootstrap";
import Card from "@material-ui/core/Card";
import { Container } from "@material-ui/core";

export default function UserGuide()
{
	return (

		<div className='container'>
			<h1>User Guide Page</h1>

			<Container>
				<Row>
					<Col>
						once you register to the system the can
						submit the research papers,
						conduct workshops
						present youre research-related activities

						you can register by go through navigater's loging and once you register you can click research paper and publish youre research paper by clicking publish research paper and
						and view it by clicking view research paper.If you need research paper template also you can select template by "Template".

						You can add the conference details and edit as Editor. once you go through "for authers" "Add conference details"

						There are landing page that shows all the related information including venue and date.Download page where the research paper templates, workshop PowerPoint
						templates, and other templates can be download. Separate pages for each of the main events in the conference. (Research paper
						presentations, workshops, etc.) A registration page where a user can be registered as a researcher, workshop
						presenter, or attendee. When the researcher registered to the system, the research paper can uploaded alongside the contact information.When the workshop conductor is registered to the system, a proposal containing
						all the necessary details about the workshop should be uploaded alongside the contact information. When the user is registered to the system all the necessary contact information
						can uploaded.


					</Col>
					<Col><img src='https://media.istockphoto.com/photos/you-have-the-power-to-control-how-your-story-ends-picture-id1279149314?s=612x612' width='800' height='800' className='img-fluid' alt='' />Anyone can view all the conferece details as a guest
<row>

	You can to see the research paper uploads and workshop detail uploads in separate pages as Reviewers.
	The uploads are available to view.
	Reviewers can approve or decline the research papers or workshop proposals. And
	notification is sent to the relevant user.
	Attendees should pay upfront to register for the conference</row>

					</Col>
				</Row>
			</Container>
		</div>

	);
}
