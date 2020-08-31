import React from "react";
import image from "../../../../assets/images/signInBackground.png";

class SpacesReusable extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row justify-content-center align-items-center mb-2">
				<div>
					<div className="ml-0 mr-2">
						<img
							src={image}
							alt="user"
							style={{
								width: 25,
								height: 25,
								borderRadius: "100%"
							}}
						/>
					</div>
				</div>
				<div>
					<div className="font-13">
						<b> IIT JEE NEET Preparation</b>
					</div>
					<div className="font-12 text-secondary mt-1">
						Admin &bull; 65 items
					</div>
				</div>
			</div>
		);
	}
}
export default SpacesReusable;
