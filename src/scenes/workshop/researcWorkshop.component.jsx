import React from 'react';
import { Link } from "react-router-dom";
import { Form,FormGroup,Dropdown,} from "react-bootstrap";


export default function ResearchWorkShop()
{
	return (
		<div className='container'>
			<h2>Publish Research paper</h2>
			<br />
			<form>


				<div className='mb-3'>

					<label htmlFor='subjectName' className='form-label'>Workshop Title</label>
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
						<label htmlFor='subjectName' className='form-label'>Publisher Image</label>
						<Form.File
							className='form-control'
							id="datetime"
							data-browse="Bestand kiezen"
							custom
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
						<label htmlFor='subjectName' className='form-label'>Publisher Details</label>
						<input
							type='text'
							className='form-control'
							id='subjectName'
							name='subjectName'
						/>
					</div>



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
		</div>
	);
}
