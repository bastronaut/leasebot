import React, {Component} from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';


export default class App extends Component {
	render() {
		return (
			<div>
				<p>hi there</p>
			</div>
		)
	}
}
