import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
	Avatar,
	Box,
	Button,
	Divider,
	Drawer,
	List,
	Typography,
} from '@material-ui/core';
import {
	AlertCircle as AlertCircleIcon,
	BarChart as BarChartIcon,
	Lock as LockIcon,
	Settings as SettingsIcon,
	ShoppingBag as ShoppingBagIcon,
	User as UserIcon,
	UserPlus as UserPlusIcon,
	Users as UsersIcon,
} from 'react-feather';
import Paper from "@material-ui/core/Paper";
import NavItem from '../../molecules/navItem/navItem';
import { Group, Subject } from "@material-ui/icons";

const user = {
	avatar   : '/static/images/avatars/avatar_6.png',
	jobTitle : 'Senior Developer',
	name     : 'Katarina Smith',
};

const items = [
	{
		href  : '/app/dashboard',
		icon  : BarChartIcon,
		title : 'Dashboard',
	},
	{
		href  : '/app/registration',
		icon  : UsersIcon,
		title : 'Registration',
	},
	{
		href  : '/app/changes',
		icon  : ShoppingBagIcon,
		title : 'Changes List',
	},
	{
		href  : '/app/account',
		icon  : UserIcon,
		title : 'Account',
	},
	{
		href  : '/app/settings',
		icon  : SettingsIcon,
		title : 'Settings',
	},
	{
		href  : '/login',
		icon  : LockIcon,
		title : 'Login',
	},
	{
		href  : '/register',
		icon  : UserPlusIcon,
		title : 'Register',
	},

	{
		href  : '/researchWorkshop/publish',
		icon  : Group,
		title : 'Workshop Publish',
	},
	{
		href  : '/research/publish',
		icon  : Subject,
		title : 'Research Paper Publish',
	},
	{
		href  : '/404',
		icon  : AlertCircleIcon,
		title : 'Error',
	},
];

const DashboardSidebar = ({ onMobileClose, openMobile }) =>
{
	const location = useLocation();

	useEffect(() =>
	{
		if (openMobile && onMobileClose)
		{
			onMobileClose();
		}
	}, [ location.pathname ]);

	const content = (
		<Box
			sx={{
				display       : 'flex',
				flexDirection : 'column',
				height        : '100%',
			}}
		>
			<Box
				sx={{
					alignItems    : 'center',
					display       : 'flex',
					flexDirection : 'column',
					p             : 2,
				}}
			>
				<Avatar
					component={RouterLink}
					src={user.avatar}
					sx={{
						cursor : 'pointer',
						width  : 64,
						height : 64,
					}}
					to='/app/account'
				/>
				<Typography
					color='textPrimary'
					variant='h5'
				>
					{user.name}
				</Typography>
				<Typography
					color='textSecondary'
					variant='body2'
				>
					{user.jobTitle}
				</Typography>
			</Box>
			<Divider />
			<Box sx={{ p: 2 }}>
				<List>
					{items.map((item) => (
						<NavItem
							href={item.href}
							key={item.title}
							title={item.title}
							icon={item.icon}
						/>
					))}
				</List>
			</Box>
			<Box sx={{ flexGrow: 1 }} />
		</Box>
	);

	return (
		<>
			<Paper sx={{ display: { xl: 'none', xs: 'block' } }}>
				<Drawer
					anchor='left'
					onClose={onMobileClose}
					open={openMobile}
					variant='temporary'
					PaperProps={{
						sx : {
							width : 256,
						},
					}}
				>
					{content}
				</Drawer>
			</Paper>
			<Paper sx={{ display: { xs: 'none', md: 'block' } }}>
				<Drawer
					anchor='left'
					open
					variant='persistent'
					PaperProps={{
						sx : {
							width  : 256,
							top    : 64,
							height : 'calc(100% - 64px)',
						},
					}}
				>
					{content}
				</Drawer>
			</Paper>
		</>
	);
};

DashboardSidebar.propTypes = {
	onMobileClose : PropTypes.func,
	openMobile    : PropTypes.bool,
};

DashboardSidebar.defaultProps = {
	onMobileClose : () => { },
	openMobile    : false,
};

export default DashboardSidebar;
