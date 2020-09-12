import React from "react";

class Account extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<b>Account Settings</b>
					</div>
					<hr className="my-2" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							Primary Email
						</div>
						<div>
							<div>pk223933@gmail.com</div>
							<div>Add Another Email Address</div>
						</div>
					</div>
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							Password
						</div>
						<div>
							<div>Change Password</div>
						</div>
					</div>
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							Logout
						</div>
						<div>
							<div>Logout of all other browsers</div>
						</div>
					</div>
					<hr className="my-2" />
				</div>
			</div>
		);
	}
}
export default Account;
