import React from "react";
import image from "../../../../assets/images/signInBackground.png";

class SpacesReusable extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row justify-content-start align-items-center mb-1">
				<div>
					<div className="ml-0 mr-2">
						<img
							src={image}
							alt="user"
							style={{
								width: 30,
								height: 30,
								borderRadius: 5
							}}
						/>
					</div>
				</div>
				<div className="d-flex flex-column justify-content-center align-items-start">
					<div className="font-13">
						<b>Studying</b>
					</div>
					<div className="font-13 text-secondary">2 Answers</div>
				</div>
			</div>
		);
	}
}
export default SpacesReusable;
