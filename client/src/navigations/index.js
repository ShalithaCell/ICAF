import React from 'react';
import { Navigate } from 'react-router-dom';
import SettingsView from "../scenes/dashboard/settings/settings.component";
import DashboardLayout from "../components/organisms/dashboard/dashboardLayout";
import MainLayout from "../components/molecules/mainLayout/mainLayout";
import { Home, Login, NotFound } from '../scenes';

const routes = [
	{
		path     : 'app',
		element  : <DashboardLayout />,
		children : [
			{ path: 'account', element: <SettingsView /> },
			{ path: 'customers', element: <SettingsView /> },
			{ path: 'dashboard', element: <SettingsView /> },
			{ path: 'products', element: <SettingsView /> },
			{ path: 'settings', element: <SettingsView /> },
			{ path: '*', element: <Navigate to='/404' /> },
		],
	},
	{
		path     : '/',
		element  : <MainLayout />,
		children : [
			{ path: 'login', element: <Login /> },
			{ path: 'register', element: <Login /> },
			{ path: '404', element: <NotFound /> },
			{ path: '/', element: <Home /> },
			{ path: '*', element: <Navigate to='/404' /> },
		],
	},
];

export default routes;
