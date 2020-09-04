import React from "react";
import image from "../../../assets/images/signInBackground.png";

class SpaceLeft extends React.Component {
	render() {
		return (
			<div>
				<div className="bg-white space-intro">
					<div
						style={{
							backgroundImage: "url('" + image + "')",
							height: 170,
							width: "100%",
							backgroundSize: "cover"
						}}
					></div>
					<div>
						<div className="ml-2" style={{ marginTop: -50 }}>
							<img
								src={image}
								alt="user"
								style={{
									width: 100,
									height: 100,
									borderRadius: "100%",
									border: "4px solid white"
								}}
							/>
						</div>
					</div>
					<div className="pl-3">
						<h5 className="mb-0">
							<b>Python Learners</b>
						</h5>
						<p className="text-secondary mb-2">q/pythonlearners</p>
						<p className="font-13">
							A space for beginners to get started learning Python
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default SpaceLeft;
