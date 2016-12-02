import React, {PropTypes} from 'react';

const Header = () => (
	<div className="header">
		<div className="header-logo">
			<img className="header-profile-image" src="../img/avatar-large.png" />
		</div>
		<div className="header-buttons">
			<a href="#">Selected cars</a>
			<a href="#" className="selected">Q&A</a>
		</div>
	</div>
)

export default Header;