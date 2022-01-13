import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import store from './store';
import GlobalStyle from './globalStyle';
import './firebase';

import App from './App';

render(
	<React.StrictMode>
		<BrowserRouter>
			<Provider store={store}>
				<App />
				<CssBaseline />
				<GlobalStyle />
			</Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);
