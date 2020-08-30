import React from "react";
import "../../assets/css/profile.scss";
import image from "../../assets/images/signInBackground.png";
import { NavProfile } from "../";

class Profile extends React.Component {
	render() {
		return (
			<div className="container profile-component bg-white">
				<div className="row">
					<div className="col-md-8">
						<header>
							<div className="d-flex flex-row justify-content-start align-items-center">
								<div className="ml-0 my-3 mr-3">
									<img
										src={image}
										alt="user"
										style={{
											width: 110,
											height: 110,
											borderRadius: "100%"
										}}
									/>
								</div>
								<div className="d-flex flex-column justify-content-center align-items-start">
									<h4 className="mb-1">
										<b>Parikshit Singh</b>{" "}
										<small
											style={{ fontSize: 12 }}
											className="text-secondary"
										>
											Edit
										</small>
									</h4>
									<p style={{ fontSize: 18 }} className="m-0">
										MERN Stack Web Developer | Machine
										Learning Enthusiast
									</p>
									<small className="text-secondary">
										Edit
									</small>
								</div>
							</div>
							<div className="text-black-50 font-13">
								<div>Write a description about yourself</div>
								<div>4 Followers</div>
							</div>
						</header>
						<hr className="mb-0" />
						<div className="d-flex flex-row text-black-50 profile-nav font-weight-bolder font-13 px-2 justify-content-start align-items-center flex-wrap">
							<div className="py-3 px-2">Profile</div>
							<div className="py-3 px-2">5 Answers</div>
							<div className="py-3 px-2">0 Questions</div>
							<div className="py-3 px-2">0 Shares</div>
							<div className="py-3 px-2">0 Posts</div>
							<div className="py-3 px-2">4 Followers</div>
							<div className="py-3 px-2">7 Following</div>
							<div className="py-3 px-2 dropdown">
								<div
									id="dropdown-more"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									More <i className="fas fa-chevron-down"></i>
								</div>
								<div
									className="dropdown-menu text-black-50"
									aria-labelledby="dropdown-more"
								>
									<a className="dropdown-item" href="/">
										Edits
									</a>
									<a className="dropdown-item" href="/">
										Activity
									</a>
								</div>
							</div>
						</div>
						<hr className="mt-0 mb-0" />
						<div className="d-flex flex-row justify-content-between align-items-center">
							<div className="px-2 py-3 text-dark font-weight-bolder">
								Profile
							</div>
							<div className="px-2 dropleft py-3 text-secondary font-weight-bolder ">
								<div
									className="cursor-pointer"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Most Recent{" "}
									<i className="fas fa-chevron-down"></i>
								</div>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="/">
										Most Recent
									</a>
									<a className="dropdown-item" href="/">
										All-Time Views
									</a>
								</div>
							</div>
						</div>
						<hr className="mt-0" />
						<div>
							<NavProfile/>
						</div>
					</div>
					<div className="col-md-4 d-none d-md-block bg-primary"></div>
				</div>
			</div>
		);
	}
}

export default Profile;
