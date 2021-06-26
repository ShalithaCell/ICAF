import React from "react";
import { useRoutes } from 'react-router-dom';
import ThemeProvider from "@material-ui/core/styles/ThemeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './navigations';
import theme from './assets/style/theme';
import GlobalStyles from './assets/style/globalStyles';

function App()
{
	const routing = useRoutes(routes);

	return (

		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{routing}
		</ThemeProvider>
		// <Router>
		// 	<div>
		// 		<NavbarComponent />
		// 		<Switch>
		// 			<Route exact path='/' component={Home} />
		// 			<Route path='/login' component={Login} />
		// 			<Route path='/research/publish' component={ResearchPaperPublish} />
		// 			<Route path='/research/view' component={ResearchPaperView} />
		// 			<Route path='/researchWorkshop/publish' component={ResearchWorkShop} />
		// 			<Route path='/researchWorkshopView/view' component={ResearchWorkShopView} />
		// 			<Route path='/researchWorkshopCall' component={CallForResearch} />
		//
		// 		</Switch>
		// 	</div>
		// </Router>
	);
}

export default App;
