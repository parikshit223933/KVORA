import React from "react";

class Account extends React.Component {
	render() {
		return (
			<div className="px-3">
				<div className="mb-4">
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
					<hr className="my-0" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							Password
						</div>
						<div>
							<div>Change Password</div>
						</div>
					</div>
                    <hr className="my-0" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							Logout
						</div>
						<div>
							<div>Logout of all other browsers</div>
						</div>
					</div>
				</div>
                <div className="mb-4">
					<div>
						<div className="d-flex flex-row justify-content-between align-items-center">
                            <div>
                                <b>Connected Accounts</b>
                            </div>
                            <div className="text-secondary">
                                Learn More
                            </div>
                        </div>
					</div>
					<hr className="my-2" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
							<i className="fa fa-google"> </i>Google
						</div>
						<div>
							<div><span>pk223933@gmail.com</span> <span>&bull;</span> <span className="text-secondary">Disconnect</span></div>
						</div>
					</div>
					<hr className="my-0" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
						<i className="fa fa-twitter"></i> Twitter
						</div>
						<div>
							<div>Connect Twitter Account</div>
						</div>
					</div>
                    <hr className="my-0" />
					<div className="py-3 d-flex flex-row align-items-start justify-content-start">
						<div className="w-25" style={{ minWidth: 150 }}>
						<i className="fa fa-facebook"></i> Facebook
						</div>
						<div>
							<div>Connect Facebook Account</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Account;
