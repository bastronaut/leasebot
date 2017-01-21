import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux';
import undoable, {distinctState} from 'redux-undo';
import Header from '../../components/Header';
import Composer from '../../components/Composer';
import Messages from '../../containers/Messages';
import Profile from '../../components/Profile';
import CarSelector from '../../components/CarSelector';
import s from '../../assets/styles/style.css';
import '../../assets/styles/style-desktop.css';
import {getIntroduction, sendMessage, evaluateAnswer } from '../../actions';


class App extends Component {
	constructor(props) {
		super(props);
		this.state = {activePage: 1};
	}

	handleChangePage(newActivePage){
		console.log('change page: ', newActivePage);

		if(newActivePage === 0)
			window.location = "http://vm-ubuntu-jvdg5111.cloudapp.net:8002/index.html#!/profile"; // TODO HACK
		else if(newActivePage === 2)
			window.location = "http://vm-ubuntu-jvdg5111.cloudapp.net:8002/index.html#!/brands"; // TODO HACK

		//this.setState({activePage: newActivePage});
	}

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

	handleEvaluateAnswer(evaluation, remainingAnswerCount) {
		const {dispatch} = this.props;
		dispatch(evaluateAnswer(evaluation, remainingAnswerCount));
	}

	render() {
		return (
			<div id="approot" className="approot">
				<Header activePage={this.state.activePage} handleChangePage={(newPage) => this.handleChangePage(newPage) }/>
				<div className={ "wrapper" + (this.state.activePage == 1 ? " grey" : "") }>
					<div className={ "content" + (this.state.activePage == 0 ? " profile-content" : "") }>
						{
							this.state.activePage == 0 ?
								<Profile handleChangePage={(newPage) => this.handleChangePage(newPage) }/> :
								this.state.activePage == 1 ?
									<Messages
										messages={this.props.messages.messagelist}
										introductiontext={this.props.introduction.introductiontext}
										userId={this.props.introduction.userId}
										inProgress={this.props.messages.inProgress}
										evaluateAnswer={(evaluation, remainingAnswerCount) => this.handleEvaluateAnswer(evaluation, remainingAnswerCount)}
										/> :
									<CarSelector />
						}
					</div>
					{
						this.state.activePage == 1 ?
						<Composer submitMessage={(messagetext) => this.handleSubmitMessage(messagetext) }/> :
						null
					}
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
