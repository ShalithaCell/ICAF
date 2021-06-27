import React, { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
	Box,
	Button,
	Container,
	Grid,
	Link,
	TextField,
	Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { Copyright } from '../../components/organisms';
import { communicationService } from '../../utils';
import { loginAction } from '../../utils/store/user/user';

export default function Login()
{
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const [ formState, setFormState ] = useState({
		username : "",
		password : "",
	});

	const [ errorState, setErrorState ] = useState({
		showUnauthorized : false,
	});

	useEffect(() =>
	{
		setFormState({
			username : "",
			password : "",
		});

		setErrorState({
			showUnauthorized : false,
		});
	}, []);

	// const handleChange = (e) =>
	// {
	// 	setFormState({ ...formState, [e.target.name]: e.target.value });
	// };

	// const handleSubmit = async (e) =>
	// {
	// 	e.preventDefault();
	//
	// 	try
	// 	{
	// 		const { username, password } = formState;
	//
	// 		switch (e.currentTarget.id)
	// 		{
	// 		case "login":
	// 			console.log('controller login invoked');
	// 			communicationService.login({ email: username, password },
	// 				(res) =>
	// 				{
	// 					const { success } = res.data;
	//
	// 					if (success)
	// 					{
	// 						dispatch(loginAction(res.data));
	//
	// 						return;
	// 					}
	//
	// 					setErrorState({ showUnauthorized: true });
	// 				}, (err) =>
	// 				{
	// 					setErrorState({ showUnauthorized: true });
	// 				});
	// 			break;
	// 		default:
	// 			console.log('controller not found');
	// 		}
	// 	}
	// 	catch (error)
	// 	{
	// 		console.error(error);
	// 	}
	// };

	return (
		<>
			<Helmet>
				<title>Login | ICAF</title>
			</Helmet>
			<Box
				sx={{
					backgroundColor : 'background.default',
					display         : 'flex',
					flexDirection   : 'column',
					height          : '100%',
					justifyContent  : 'center',
				}}
			>
				<Container maxWidth='sm'>
					<Formik
						initialValues={{
							email    : 'demo@devias.io',
							password : 'Password123',
						}}
						validationSchema={Yup.object().shape({
							email    : Yup.string().email('Must be a valid email').max(255).required('Email is required'),
							password : Yup.string().max(255).required('Password is required'),
						})}
						onSubmit={() =>
						{
							// navigate('/app/dashboard', { replace: true });
						}}
					>
						{({
							errors,
							handleBlur,
							handleChange,
							handleSubmit,
							isSubmitting,
							touched,
							values,
						}) => (
							<form onSubmit={handleSubmit}>
								<Box sx={{ mb: 3 }}>
									<Typography
										color='textPrimary'
										variant='h2'
									>
										Sign in
									</Typography>
									<Typography
										color='textSecondary'
										gutterBottom
										variant='body2'
									>
										Sign in on the internal platform
									</Typography>
								</Box>
								<Grid
									container
									spacing={3}
								>
									<Grid
										item
										xs={12}
										md={6}
									/>
									<Grid
										item
										xs={12}
										md={6}
									/>
								</Grid>
								<Box
									sx={{
										pb : 1,
										pt : 3,
									}}
								>
									<Typography
										align='center'
										color='textSecondary'
										variant='body1'
									>
										or login with email address
									</Typography>
								</Box>
								<TextField
									error={Boolean(touched.email && errors.email)}
									fullWidth
									helperText={touched.email && errors.email}
									label='Email Address'
									margin='normal'
									name='email'
									onBlur={handleBlur}
									onChange={handleChange}
									type='email'
									value={values.email}
									variant='outlined'
								/>
								<TextField
									error={Boolean(touched.password && errors.password)}
									fullWidth
									helperText={touched.password && errors.password}
									label='Password'
									margin='normal'
									name='password'
									onBlur={handleBlur}
									onChange={handleChange}
									type='password'
									value={values.password}
									variant='outlined'
								/>
								<Box sx={{ py: 2 }}>
									<Button
										color='primary'
										disabled={isSubmitting}
										fullWidth
										size='large'
										type='submit'
										variant='contained'
									>
										Sign in now
									</Button>
								</Box>
								<Typography
									color='textSecondary'
									variant='body1'
								>
									Don&apos;t have an account?
									{' '}
									<Link
										component={RouterLink}
										to='/register'
										variant='h6'
									>
										Sign up
									</Link>
								</Typography>
							</form>
						)}
					</Formik>
				</Container>
			</Box>
		</>
		// <Container component='main' maxWidth='xs'>
		// 	<CssBaseline />
		// 	<div className={classes.paper}>
		// 		<Avatar className={classes.avatar}>
		// 			<LockOutlinedIcon />
		// 		</Avatar>
		// 		<Typography component='h1' variant='h5'>
		// 			Sign in
		// 		</Typography>
		// 		<form className={classes.form} noValidate>
		// 			<TextField
		// 				variant='outlined'
		// 				margin='normal'
		// 				required
		// 				fullWidth
		// 				id='username'
		// 				label='Email Address'
		// 				name='username'
		// 				autoComplete='email'
		// 				autoFocus
		// 				value={formState.username}
		// 				onChange={(e) => handleChange(e)}
		// 			/>
		// 			<TextField
		// 				variant='outlined'
		// 				margin='normal'
		// 				required
		// 				fullWidth
		// 				name='password'
		// 				label='Password'
		// 				type='password'
		// 				id='password'
		// 				autoComplete='current-password'
		// 				value={formState.password}
		// 				onChange={(e) => handleChange(e)}
		// 			/>
		// 			<FormControlLabel
		// 				control={<Checkbox value='remember' color='primary' />}
		// 				label='Remember me'
		// 			/>
		// 			{
		// 				errorState.showUnauthorized
		// 					? <Alert severity='error'>User name or Password is incorrect !</Alert>
		// 					: null
		// 			}
		//
		// 			<Button
		// 				type='button'
		// 				fullWidth
		// 				variant='contained'
		// 				color='primary'
		// 				className={classes.submit}
		// 				id='login'
		// 				onClick={(e) => handleSubmit(e)}
		// 			>
		// 				Sign In
		// 			</Button>
		// 			<Grid container>
		// 				<Grid item xs>
		// 					<Link href='/' variant='body2'>
		// 						Forgot password?
		// 					</Link>
		// 				</Grid>
		// 				<Grid item>
		// 					<Link href='/' variant='body2'>
		// 						Don&#39;t have an account? Sign Up
		// 					</Link>
		// 				</Grid>
		// 			</Grid>
		// 		</form>
		// 	</div>
		// 	<Box mt={8}>
		// 		<Copyright />
		// 	</Box>
		// </Container>
	);
}
