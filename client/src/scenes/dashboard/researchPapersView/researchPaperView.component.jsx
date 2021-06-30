import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import { useNavigate } from 'react-router-dom';
import Alert from "@material-ui/core/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from "@material-ui/core/TablePagination";
import { communicationService } from '../../../utils';

function createData(name, calories, fat, carbs, protein)
{
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Gingerbread3', 356, 16.0, 49, 3.9),
];

const ResearchPaperViewPage = () =>
{
	const navigate = useNavigate();

	const [ editData, setEditData ] = useState('');
	const [ disabledButton, setDisabledButton ] = useState(true);
	const [ open, setOpen ] = React.useState(false);
	const [ getError, setError ] = React.useState(false);

	const [ page, setPage ] = React.useState(0);
	const [ rowsPerPage, setRowsPerPage ] = React.useState(10);

	const handleChangePage = (event, newPage) =>
	{
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event) =>
	{
		setRowsPerPage(Number(event.target.value));
		setPage(0);
	};

	const handleClose = (event, reason) =>
	{
		if (reason === 'clickaway')
		{
			return;
		}

		setOpen(false);
	};

	useEffect(async () =>
	{
		setEditData('');
		setOpen(false);
		setError(false);
	}, []);

	const onApproveHandle = (e) =>
	{
		e.preventDefault();

		communicationService.registrationApprove({ description: editData },
			(res) =>
			{
				// debugger;
				setOpen(true);
				navigate('/app/changes');
			},
			(err) =>
			{
				// debugger;
				setOpen(false);
			});
	};

	return (
		<>
			<Helmet>
				<title>Changes | ICAF</title>
			</Helmet>
			<Card>
				<CardHeader
					subheader='All the research paper submissions '
					title='Research Paper Review form'
				/>
				<Divider />
				<CardContent>
					<TableContainer component={Paper}>
						<Table sx={{ minWidth: 650 }} aria-label='simple table'>
							<TableHead>
								<TableRow>
									<TableCell>Dessert (100g serving)</TableCell>
									<TableCell align='right'>Calories</TableCell>
									<TableCell align='right'>Fat&nbsp;(g)</TableCell>
									<TableCell align='right'>Carbs&nbsp;(g)</TableCell>
									<TableCell align='right'>Protein&nbsp;(g)</TableCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => (
										<TableRow
											key={row.name}
											sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
										>
											<TableCell component='th' scope='row'>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.calories}</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right'>{row.protein}</TableCell>
										</TableRow>
									))}
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={[ 10, 25, 100 ]}
						component='div'
						count={rows.length}
						rowsPerPage={rowsPerPage}
						page={page}
						onPageChange={handleChangePage}
						onRowsPerPageChange={handleChangeRowsPerPage}
					/>
				</CardContent>
				<Divider />
			</Card>
			<Alert severity='error' hidden={!getError}>Something went wrong with data saving</Alert>
			<Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
				<Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
					Data approved successfully.
				</Alert>
			</Snackbar>
		</>
	);
};

export default ResearchPaperViewPage;
