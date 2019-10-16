import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './Views/Home/Home.jsx';

class App extends React.Component {
	render() {
		return (
			<Switch>
				<Route path="/" component={Home}></Route>
			</Switch>
		)
	}
}

export default App;