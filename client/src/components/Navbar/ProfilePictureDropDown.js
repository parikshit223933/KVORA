import React from "react";
import image from "../../assets/images/signInBackground.png";

class ProfilePictureDropDown extends React.Component {
	render() {
		return (
			<div
				className="dropdown-menu pb-0 position-absolute"
				style={{ width: 270, cursor: "pointer", left: -100 }}
				aria-labelledby="dropdownMenuButton"
			>
				<div className="px-3 pt-2">
					<div className="mb-2">
						<img
							src={image}
							alt="user"
							style={{
								width: 40,
								height: 40,
								borderRadius: "100%"
							}}
						/>
					</div>
					<div>
						<div className="d-flex flex-row justify-content-between align-items-center">
							<h6 className="m-0">
								<b>Parikshit Singh</b>
							</h6>
							<div>
								<i className="fas fa-chevron-right"></i>
							</div>
						</div>
						<div
							className="text-secondary w-75"
							style={{ fontSize: 13 }}
						>
							Mern Stack Web Developer | Machine Learning
							Enthusiast
						</div>
					</div>
				</div>
				<hr />
				<div className="dp-drop-first-list">
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="far fa-comment-dots"></i>
						</div>
						<div>Messages</div>
					</a>
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="fas fa-bullhorn"></i>
						</div>
						<div>Create Ad</div>
					</a>
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="fas fa-chart-bar"></i>
						</div>
						<div>Stats</div>
					</a>
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="fas fa-copy"></i>
						</div>
						<div>Your Content</div>
					</a>
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="fas fa-bookmark"></i>
						</div>
						<div>Bookmarks</div>
					</a>
					<a className="dropdown-item text-secondary pl-3 py-2 d-flex flex-row justify-content-start align-items-center">
						<div className="mr-2">
							<i className="fab fa-firstdraft"></i>
						</div>
						<div>Drafts</div>
					</a>
				</div>
				<hr className="mb-1" />

				<div className="dp-drop-second-list" style={{ fontSize: 13 }}>
					<a className="dropdown-item font-weight-bold text-black-50 pl-3 py-1 d-flex flex-row justify-content-start align-items-center">
						Settings
					</a>
					<a className="dropdown-item font-weight-bold text-black-50 pl-3 py-1 d-flex flex-row justify-content-start align-items-center">
						Languages
					</a>
					<a className="dropdown-item font-weight-bold text-black-50 pl-3 py-1 d-flex flex-row justify-content-start align-items-center">
						Help
					</a>
					<a className="dropdown-item font-weight-bold text-black-50 pl-3 py-1 d-flex flex-row justify-content-start align-items-center">
						Logout
					</a>
				</div>

				<hr className="mt-1 mb-0" />

				<div className="px-3" style={{ backgroundColor: "#f7f7f8" }}>
					<ul
						style={{ fontSize: "12px" }}
						className="py-2 pr-2 text-black-50 pl-0 extra-list mb-0"
					>
						<li className="list-inline-item">About</li>
						<li className="list-inline-item">Careers</li>
						<li className="list-inline-item">Terms</li>
						<li className="list-inline-item">Privacy</li>
						<li className="list-inline-item">Acceptable Use</li>
						<li className="list-inline-item">Businesses</li>
						<li className="list-inline-item">Your Ad Choices</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ProfilePictureDropDown;
