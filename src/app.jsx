import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import undoable, { distinctState } from 'redux-undo';
import Header from './components/Header';
import Messages from './components/Messages';
import Composer from './components/Composer';
import s from './assets/styles/style.css';

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
				<Header/>
				<div className={s.wrapper}>
					<div className={s.content}>
							<Messages/>
							<Composer/>
					</div>
				</div>
			</div>
		)
	}
}


// <div>
// 	<Header/>
// 	<div className="wrapper">
// 		<div className="content">
// 			<Messages/>
// 			<Composer/>
// 		</div>
// 	</div>
// </div>

const mapStateToProps = state => {
	return;
}

export default connect(mapStateToProps)(App)
