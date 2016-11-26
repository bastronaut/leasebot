import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import undoable, {distinctState} from 'redux-undo';
import Header from '../../components/Header';
import Composer from '../../components/Composer';
import Messages from '../../containers/Messages';
import s from '../../assets/styles/style.css';
import '../../assets/styles/style-desktop.css';
import {getIntroduction} from '../../actions';

class App extends Component {
	static propTypes = {
		messages: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const {dispatch} = this.props;

		dispatch(getIntroduction());

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
	console.log('the state:');
	console.log(state);
	return {
		messages: ['state.messages']
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps)(App)
