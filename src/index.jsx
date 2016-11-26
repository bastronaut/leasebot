import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {store} from './store/index.js';
import {Provider} from 'react-redux'
import App from './components/app.jsx';

if (module.hot) {
	module.hot.accept('./components/app.jsx', () => {
		const App = require('./components/app.jsx').default;
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
