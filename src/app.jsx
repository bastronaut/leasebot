import React, { Component, PropTypes } from 'react'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo';


class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const { dispatch } = this.props;
	}

	render() {
		return (
			<div>
				<p>hi there</p>
			</div>
		)
	}

}
