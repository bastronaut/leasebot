import React, {Component} from 'react';
import MessageItem from '../../components/MessageItem';

export default class Messages extends Component {

	render() {
		console.log("the props:")
		console.log(this.props);
		return (
			<div className="messages">
        {this.props.introductiontext ?
            <MessageItem sender="bot" messagetext={this.props.introductiontext}/>
        : '' }

				{this.props.messages.map( (message, i) =>
					<MessageItem sender={message.sender}
						messagetext={message.text}
						msgoptions={message.options}
						key={'message_'+i} />
				)}

        {this.props.inProgress ? <MessageItem sender="bot pending"
          messagetext={"..."} pending={this.props.inProgress}/> : '' }
			</div>

		)
	}
}
