import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import undoable, {distinctState} from 'redux-undo';
import Header from '../../components/Header';
import Composer from '../../components/Composer';
import Messages from '../../containers/Messages';
import s from '../../assets/styles/style.css';
import '../../assets/styles/style-desktop.css';
import {getIntroduction, sendMessage } from '../../actions';


class App extends Component {
	static propTypes = {
		messages: PropTypes.array.isRequired,
		dispatch: PropTypes.func.isRequired
	}

	componentDidMount() {
		const {dispatch} = this.props;

		dispatch(getIntroduction());

	}

	handleSubmitMessage(messagetext) {
		console.log('hier ist:', messagetext);
		const {dispatch, userId} = this.props;
		dispatch(sendMessage(messagetext, userId));
	}

	render() {
		return (
			<div id="approot">
				<Header/>
				<div className="wrapper">
					<div className="content">
						<Messages
							messages={this.props.messages}
							introductiontext={this.props.introductiontext}
							userId={this.props.userId}
							inProgress={this.props.inProgress}
							/>
					</div>
					<Composer submitMessage={(messagetext) => this.handleSubmitMessage(messagetext) }/>
				</div>
			</div>
		)
	}
}



const mapStateToProps = state => {
	return {
		introductiontext : state.introduction_reducer.introduction,
		messages: state.introduction_reducer.messages,
		inProgress: state.introduction_reducer.inProgress,
		userId: state.introduction_reducer.userid
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps)(App)
