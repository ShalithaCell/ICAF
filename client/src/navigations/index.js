import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from "../components/organisms/dashboard/dashboardLayout";
import MainLayout from "../components/molecules/mainLayout/mainLayout";
import {
	Home,
	Login,
	NotFound,
	CallForResearch,
	ResearchPaperPublish,
	ResearchPaperView,
	ResearchWorkShop,
	ResearchPaperTemplates,
	ResearchWorkShopView,
	SettingsView,
	ChangesList,
	CommonChangesView,
} from '../scenes';

const routes = [
	{
		path     : 'app',
		element  : <DashboardLayout />,
		children : [
			{ path: 'changes', element: <ChangesList /> },
			{ path: 'customers', element: <SettingsView /> },
			{ path: 'dashboard', element: <SettingsView /> },
			{ path: 'changes/view', element: <CommonChangesView /> },
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
			{ path: '/researchWorkshop/publish', element: <ResearchWorkShop /> },
			{ path: '/researchWorkshopView/view', element: <ResearchWorkShopView /> },
			{ path: '/researchWorkshopCall/view', element: <CallForResearch /> },
			{ path: '/research/publish', element: <ResearchPaperPublish /> },
			{ path: '/research/view', element: <ResearchPaperView /> },
			{ path: '/research/templates', element: <ResearchPaperTemplates /> },
			{ path: '/research/templates', element: <Login /> },
			{ path: '404', element: <NotFound /> },
			{ path: '/', element: <Home /> },
			{ path: '*', element: <Navigate to='/404' /> },
		],
	},
];

export default routes;
