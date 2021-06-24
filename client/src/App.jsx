import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Login, Home } from './scenes/index';

function App()
{
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/login' component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
