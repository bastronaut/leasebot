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
		messages: PropTypes.object.isRequired,
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
			<div id="approot" className="approot">
				<Header/>
				<div className="wrapper">
					<div className="content">
						<Messages
							messages={this.props.messages.messagelist}
							introductiontext={this.props.introduction.introductiontext}
							userId={this.props.introduction.userId}
							inProgress={this.props.messages.inProgress}
							/>
					</div>
					<Composer submitMessage={(messagetext) => this.handleSubmitMessage(messagetext) }/>
				</div>
			</div>
		)
	}
}



const mapStateToProps = state => {
	// return {
	// 	introductiontext : state.introduction.introduction,
	// 	messages: state.messages.messages,
	// 	inProgress: state.messages.inProgress,
	// 	userId: state.introduction.userid
	// }
	return {
		messages: state.messages,
		introduction: state.introduction
	}
}

const mapDispatchToProps = (dispatch) => {
	return {}
}

export default connect(mapStateToProps)(App)
