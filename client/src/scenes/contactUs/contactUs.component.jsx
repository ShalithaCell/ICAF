import React from 'react';
import { Link } from "react-router-dom";
import { Form,FormGroup,Dropdown,} from "react-bootstrap";

export default function ContactUs()
{
	return (
		<div className='container'>
			<img src='../../assets/images/aboutUs.jpg' className='img-fluid' alt='Responsive image' />
			<form>
				<div className='mb-3'>

					<label htmlFor='subjectName' className='form-label'>Title</label>
					<input
						type='text'
						className='form-control'
						id='subjectName'
						name='subjectName'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='subjectName' className='form-label'>Publisher Name</label>
					<input
						type='text'
						className='form-control'
						id='subjectName'
						name='subjectName'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='description' className='form-label'>Description</label>
					<textarea
						className='form-control'
						id='description'
						rows='3'
					/>
					<br/>

					<div className='mb-3'>
						<label htmlFor='subjectName' className='form-label'>Research Paper</label>
					</div>

					<Form.File
						className='form-control'
						id="datetime"
						data-browse="Bestand kiezen"
						custom
					/>

				</div>
				<div className='mb-3'>
					<label htmlFor='subjectAmount' className='form-label'>Publish Date</label>
					<br/>

					<input
						type="datetime-local"
						className='form-control'
						id='subjectName'
						name='subjectName'
					/>

				</div>

				<br/>
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
			<img src='../../assets/images/aboutUs.jpg' className='img-fluid' />
		</div>
	);
}
