import React, {PropTypes} from 'react';

const Profile = ({handleChangePage}) => (
	<div className="profile">
		<div className="large-profile-image">
		</div>
		<h1 className="name">Jane Doe</h1>
		<h1 className="profile-header">Your profile</h1>
		<div className="profile-settings">
			<div className="profile-setting">
				<span>Group</span>
				<select>
					<option>Technology</option>
					<option>S&O</option>
					<option>FAS</option>
				</select>
			</div>
		</div>
	</div>
)

export default Profile;