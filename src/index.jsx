import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {store} from './store/index.js';
import {Provider} from 'react-redux'
import App from './containers/App/';

if (module.hot) {
	module.hot.accept('./containers/App/app.jsx', () => {
		const App = require('./containers/App/app.jsx').default;
		render(
			<AppContainer>
			<Provider store={store}>
				<App/>
			</Provider>
		</AppContainer>, document.getElementById("app"));
	});
}

render(
	<AppContainer>
	<Provider store={store}>
		<App/>
	</Provider>
</AppContainer>, document.getElementById("app"));
