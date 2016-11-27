import React, {Component} from 'react';

const Footer = () => (
	<div className="footer">
		<div className="footer-wrapper">
			<div className="inserttext">
				<input type="textarea" className="inputmessage" name="inputmessage" placeholder="Ask me anything "/>
			</div>
			<div className="inserttexticons">
				<img src="/img/send.svg" className="sendicon"/>
			</div>
		</div>
	</div>
)

export default Footer;
