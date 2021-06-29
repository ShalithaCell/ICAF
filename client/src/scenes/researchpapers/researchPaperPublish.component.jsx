import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { Form, FormGroup, Dropdown } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CardContent from "@material-ui/core/CardContent";

export default function ResearchPaperPublish()
{
	const [ editData, setEditData ] = useState('');
	const [ open, setOpen ] = React.useState(false);

	useEffect(() =>
	{
		setEditData('');
	}, []);

	const handleClick = () =>
	{
		setOpen(true);
	};

	return (
		<div className='container'>
			<h2>Publish Research paper</h2>
			<br />
			<form>
				<div className='mb-3'>
					<label htmlFor='subjectName' className='form-label'>Category</label>
					<br />
					<select className='form-control'>
						<option value='volvo'>Architecture</option>
						<option value='saab'>Software Engineering</option>
						<option value='opel'>Data Science</option>
						<option value='audi'>Science and Technology</option>
						<option value='audi'>Maths</option>
						<option value='audi'>Engineering</option>
						<option value='audi'>Other</option>
					</select>
				</div>
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
					<CardContent>
						<CKEditor
							editor={ClassicEditor}
							data=''
							onReady={(editor) =>
							{
								// You can store the "editor" and use when it is needed.
								console.log('Editor is ready to use!', editor);
							}}
							onChange={(event, editor) =>
							{
								const data = editor.getData();

								console.log({ event, editor, data });
								setEditData(data);
							}}
							onBlur={(event, editor) =>
							{
								console.log('Blur.', editor);
							}}
							onFocus={(event, editor) =>
							{
								console.log('Focus.', editor);
							}}
						/>
					</CardContent>
					<br />
					<div className='mb-3'>
						<label htmlFor='subjectName' className='form-label'>Research Paper</label>
					</div>

					<Form.File
						className='form-control'
						id='datetime'
						data-browse='Bestand kiezen'
						custom
					/>

				</div>
				<div className='mb-3'>
					<label htmlFor='subjectAmount' className='form-label'>Publish Date</label>
					<br />

					<input
						type='datetime-local'
						className='form-control'
						id='subjectName'
						name='subjectName'
					/>

				</div>
				<br />
				<button type='submit' className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
}
