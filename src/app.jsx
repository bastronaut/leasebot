import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';


export default class App extends Component {
	componentWillMount() {
		// http://stackoverflow.com/questions/34570758/why-do-we-need-middleware-for-async-flow-in-redux
	},

	render() {
		return (
			<div>
				<p>hi there</p>
			</div>
		)
	}
}
