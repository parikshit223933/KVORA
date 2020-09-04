import React from "react";
import image from "../../../assets/images/signInBackground.png";

class SpaceSubHeader extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="d-flex flex-row justify-content-start align-items-center mb-3">
					<div>
						<img
							src={image}
							alt="user"
							style={{
								width: 30,
								height: 30,
								borderRadius: "100%",
								border: "4px solid white"
							}}
						/>
					</div>
					<div className="font-13 text-secondary">
						Parikshit Singh
					</div>
				</div>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div>
						<button
							type="button"
							className="btn btn-sm curved-button blue-tint mx-2"
						>
							<span>
								<i className="fas fa-link"></i>
							</span>{" "}
							<b>Link</b>
						</button>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-sm curved-button blue-tint mx-2"
						>
							<span>
								<i className="fas fa-pen-alt"></i>
							</span>{" "}
							<b>Post</b>
						</button>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-sm curved-button blue-tint mx-2"
						>
							<span>
								<i className="fas fa-question-circle"></i>
							</span>{" "}
							<b>Question</b>
						</button>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default SpaceSubHeader;
