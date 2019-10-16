import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Routes from './Routes.jsx';

// import generic CSS
import './styles/app.scss';

ReactDOM.render(
	<div>
		<BrowserRouter>
			<Header />
			<Routes />
			<Footer />
		</BrowserRouter>
	</div>,
	document.getElementById('root')
);

module.hot.accept();