import React, {PropTypes} from 'react';

const Header = ({activePage, handleChangePage}) => (
	<div className={"header" + ( activePage == 0 ? " profile-header" : "" )}>
		<div className="header-logo">
			<img className="header-profile-image" src="../img/avatar-large.png" onClick={() =>  handleChangePage(0) }/>
			{
				activePage != 1 ?
					<img className="header-back-image" src="../img/back.png" onClick={() =>  handleChangePage(1) }/> :
					null
			}
		</div>
		{
			activePage != 0 ?
				<div className="header-buttons">
					<a href="#" className={activePage == 2 ? 'selected' : ''} onClick={() =>  handleChangePage(2) }>Selected cars</a>
					<a href="#" className={activePage == 1 ? 'selected' : ''} onClick={() =>  handleChangePage(1) }>Q&A</a>
				</div> :
				null
		}	
	</div>
)

export default Header;