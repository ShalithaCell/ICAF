import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login, Home, ResearchPaperPublish,ResearchPaperView,ResearchWorkShop,ResearchWorkShopView,CallForResearch} from './scenes/index';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/navbar/navbar.component';

function App()
{
	return (
		<Router>
			<div>
				<NavbarComponent />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
					<Route path='/research/publish' component={ResearchPaperPublish} />
					<Route path='/research/view' component={ResearchPaperView} />
					<Route path='/researchWorkshop/publish' component={ResearchWorkShop} />
					<Route path='/researchWorkshopView/view' component={ResearchWorkShopView} />
					<Route path='/researchWorkshopCall' component={CallForResearch} />

				</Switch>
			</div>
		</Router>
	);
}

export default App;
