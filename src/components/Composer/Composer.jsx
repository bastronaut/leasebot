import React, {Component} from 'react';

export default class Footer extends Component {

	constructor(props) {
	 super(props);
	 this.state = {messagetext: ''};

	 this.handleChange = this.handleChange.bind(this);
 }

	onSubmitClick = (event) => {
		event.preventDefault();
		this.props.submitMessage(this.state.messagetext);
		this.setState({messagetext: ''})
	}

	handleChange = (event) => {
			this.setState({messagetext: event.target.value});
	}

	render() {
		return (
			<div className="footer">
				<div className="footer-wrapper">
					<form onSubmit={this.onSubmitClick.bind(this)}>
						<div className="inserttext">
							<input type="textarea" className="inputmessage"
								name="inputmessage" placeholder="Ask me anything"
								value={this.state.messagetext ? this.state.messagetext : ''}
								onChange={this.handleChange} />
						</div>
						<div className="inserttexticons">
							<input type="image" src="/img/send.svg" className="sendicon"/>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

//

// const Footer = ({submitMessage}) => (
// 	<div className="footer">
// 		<div className="footer-wrapper">
// 			<form onSubmit={submitMessage.bind(this)}>
// 				<div className="inserttext">
// 					<input type="textarea" className="inputmessage" name="inputmessage" placeholder="Ask me anything "/>
// 				</div>
// 				<div className="inserttexticons">
// 					<input type="image" src="/img/send.svg" className="sendicon"  />
// 				</div>
// 			</form>
// 		</div>
// 	</div>
// )
//
// export default Footer;
