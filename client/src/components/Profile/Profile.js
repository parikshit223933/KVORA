import React from "react";
import "../../assets/css/profile.scss";
import image from "../../assets/images/signInBackground.png";

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
									<h4 className="mb-1"><b>Parikshit Singh</b> <small style={{fontSize:12}} className="text-secondary">Edit</small></h4>
									<p style={{fontSize:18}} className="m-0">
										MERN Stack Web Developer | Machine
										Learning Enthusiast
									</p>
                                    <small className="text-secondary">Edit</small>
								</div>
							</div>
                            <div className="text-black-50 font-13">
                                <div>
                                    Write a description about yourself
                                </div>
                                <div>
                                    4 Followers
                                </div>
                            </div>
						</header>
                        <hr/>
					</div>
					<div className="col-md-4 d-none d-md-block bg-primary"></div>
				</div>
			</div>
		);
	}
}

export default Profile;
