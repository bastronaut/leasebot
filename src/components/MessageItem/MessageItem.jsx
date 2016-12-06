import React, {PropTypes} from 'react';
import MessageOptions from '../MessageOptions';

const MessageItem = ({sender, messagetext, msgoptions}) => (
	<div className={sender}>
		<div className="message-container">
			<div className="message-body">
				<div className={ "message" + (msgoptions ? " message-with-options" : "") }>
					<p>{messagetext}</p>
				</div>
				{msgoptions ? <MessageOptions msgoptions={msgoptions ? msgoptions : [1, 2]}/>
				: ''}
			</div>
		</div>
		<div className={ "message-footer" + (msgoptions ? " open" : "") }>
			<img src={sender == 'person' ? "img/textright.png" : msgoptions ? "img/text-open.png" : "img/textleft.png" } className="message-arrow"/>
			<img src={sender == 'person' ? "img/avatar-small.png" : "img/bot icon.png" } className="avatar-img"/>
		</div>
	</div>
)

MessageItem.propTypes = {
	sender: PropTypes.string.isRequired,
	messagetext: PropTypes.string.isRequired
}

export default MessageItem;
