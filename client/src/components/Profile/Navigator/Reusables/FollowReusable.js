import React from "react";
import image from "../../../../assets/images/signInBackground.png";

class FollowReusable extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div className="ml-0 mr-2">
							<img
								src={image}
								alt="user"
								style={{
									width: 30,
									height: 30,
									borderRadius: "100%"
								}}
							/>
						</div>
						<div className="d-flex flex-row justify-content-start align-items-center flex-wrap">
							<div>
								<b>Parikshit Singh</b>,{" "}
							</div>
							<div className="text-secondary">
								{" "}
								<span>Chief Executive Officer</span>
							</div>
						</div>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-sm curved-button btn-light d-flex flex-row follow-button"
						>
							<div>
								<i className="fas fa-user-plus"></i>
							</div>{" "}
							<div className="mx-1">Follow</div>
							<div> 206</div>
						</button>
					</div>
				</div>
				<hr className="my-2" />
			</div>
		);
	}
}
export default FollowReusable;
