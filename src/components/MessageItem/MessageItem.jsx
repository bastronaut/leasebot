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
			<img src={sender == 'person' ? "img/textright.png" : "img/textleft.png" } className="message-arrow"/>
			<img src={sender == 'person' ? "img/avatar-small.png" : "img/bot icon.png" } className="avatar-img"/>
		</div>
	</div>
)

MessageItem.propTypes = {
	sender: PropTypes.string.isRequired,
	messagetext: PropTypes.string.isRequired
}

export default MessageItem;
