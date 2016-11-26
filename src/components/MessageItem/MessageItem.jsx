import React, {PropTypes} from 'react';

const MessageItem = ({sender, messagetext}) => (
	<div className={sender}>
		<div className="message-container">
			<div className="message-body">
				<div className="message">
					<p>{messagetext}</p>
				</div>
			</div>
		</div>
		<div className="message-footer">
			<img src="img/textright.jpg" className="message-arrow"/>
			<img src="img/luc.jpg" className="avatar-img"/>
		</div>
	</div>
)

MessageItem.propTypes = {
	sender: PropTypes.string.isRequired,
	messagetext: PropTypes.string.isRequired
}

export default MessageItem;
