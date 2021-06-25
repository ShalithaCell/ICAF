import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import App from "./App";
import store from './utils/store';
import "regenerator-runtime/runtime";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById('root'),
);
