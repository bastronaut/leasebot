import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import undoable, {distinctState} from 'redux-undo';
import Header from './Header';
import Messages from './Messages';
import Composer from './Composer';
import s from '../assets/styles/style.css';
import '../assets/styles/style-desktop.css';
import {getIntroduction} from '../actions';

class App extends Component {
	static propTypes = {
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const {dispatch, store} = this.props;
		console.log('the component mounted');
		console.log(this.props);

		getIntroduction.bind(this, dispatch);
		this.unsubsubscribe = store.subscribe(() =>
			this.forceUpdate());

	}

	componentWillUnmount() {
		this.unsubsubscribe();
	}

	render() {
		return (
			<div id="approot">
				<Header/>
				<div className="wrapper">
					<div className="content">
						<Messages/>
					</div>
					<Composer/>
				</div>
			</div>
		)
	}
}



const mapStateToProps = state => {
	console.log('the state and this:')
	console.log(state);
	console.log(this);
	return {
		message: 'hi'
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps)(App)
