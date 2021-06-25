import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import { Copyright } from '../../components/organisms';
import useStyles from './login.styles';
import { communicationService } from '../../utils';
import { loginSuccess } from '../../utils/store/user/user';

export default function Login()
{
	const classes = useStyles();
	const dispatch = useDispatch();

	const [ formState, setFormState ] = useState({
		username : "",
		password : "",
	});

	const [ errorState, setErrorState ] = useState({
		showUnauthorized : false,
	});

	const handleChange = (e) =>
	{
		setFormState({ ...formState, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) =>
	{
		e.preventDefault();

		try
		{
			const { username, password } = formState;

			switch (e.currentTarget.id)
			{
			case "login":
				console.log('controller login invoked');
				communicationService.login({ email: username, password },
					(res) =>
					{
						dispatch(loginSuccess(res));
					}, (err) =>
					{
						setErrorState({ showUnauthorized: true });
					});
				break;
			default:
				console.log('controller not found');
			}
		}
		catch (error)
		{
			console.error(error);
		}
	};

	return (
		<Container component='main' maxWidth='xs'>
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component='h1' variant='h5'>
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						id='username'
						label='Email Address'
						name='username'
						autoComplete='email'
						autoFocus
						value={formState.username}
						onChange={(e) => handleChange(e)}
					/>
					<TextField
						variant='outlined'
						margin='normal'
						required
						fullWidth
						name='password'
						label='Password'
						type='password'
						id='password'
						autoComplete='current-password'
						value={formState.password}
						onChange={(e) => handleChange(e)}
					/>
					<FormControlLabel
						control={<Checkbox value='remember' color='primary' />}
						label='Remember me'
					/>
					{
						errorState.showUnauthorized
							? <Alert severity='error'>User name or Password is incorrect !</Alert>
							: null
					}

					<Button
						type='button'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
						id='login'
						onClick={(e) => handleSubmit(e)}
					>
						Sign In
					</Button>
					<Grid container>
						<Grid item xs>
							<Link href='/' variant='body2'>
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href='/' variant='body2'>
								Don&#39;t have an account? Sign Up
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
			<Box mt={8}>
				<Copyright />
			</Box>
		</Container>
	);
}
