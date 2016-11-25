import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {Provider} from 'react-redux'
import App from './app.jsx';
import reducer from './reducers'
import './assets/styles/style.css';

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))

render(
	<AppContainer>
	<Provider store={store}>
		<App/>
	</Provider>
</AppContainer>, document.getElementById("app"));

if (module.hot) {
	module.hot.accept('./app.jsx', () => {
		const App = require('./app.jsx').default;
		render(
			<AppContainer>
			<Provider store={store}>
				<App/>
			</Provider>
		</AppContainer>, document.getElementById("app"));
	});
}
