import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import {
	Box,
	Container,
} from '@material-ui/core';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const CommonChangesView = () =>
{
	const [ editData, setEditData ] = useState('');

	useEffect(() =>
	{
		setEditData('');
	}, []);

	return (
		<>
			<Helmet>
				<title>Changes | ICAF</title>
			</Helmet>
			<Card>
				<CardHeader
					subheader='Changes '
					title='Review form'
				/>
				<Divider />
				<CardContent>
					<CKEditor
						editor={ClassicEditor}
						data='<p>Hello from CKEditor 5!</p>'
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
				<CardActions>
					<Button variant='outlined' color='error'>Discard</Button>
					<Button variant='outlined' color='success'>Accept</Button>
				</CardActions>
				<Divider />
			</Card>
		</>
	);
};

export default CommonChangesView;
