import React from "react";
import image from "../../../assets/images/signInBackground.png";

class ReusableCard extends React.Component {
	render() {
		return (
			<div
				className="reusable-card m-1 position-relative cursor-pointer"
				style={{ borderRadius: 10, overflow: "hidden" }}
			>
				<div>
					<div
						style={{
							backgroundImage: "url('" + image + "')",
							height: 50,
							width: "100%",
							backgroundSize: "cover"
						}}
					></div>
					<div style={{ marginTop: -22.5 }}>
						<div>
							<img
								className="mx-auto d-block"
								src={image}
								alt="user"
								style={{
									width: 45,
									height: 45,
									borderRadius: "100%",
									border: "3px solid white"
								}}
							/>
						</div>
					</div>
					<div className="font-weight-bolder text-center font-13 my-1">
						Share Your Story
					</div>
					<div className="text-center font-13">
						A platform to share your content. If the Content is
						fruitful, U will be featured
					</div>
					<div
						className="text-center position-absolute w-100"
						style={{ bottom: 10 }}
					>
						<button
							type="button"
							className="btn blue-tint font-13 curved-button btn-sm btn-light"
						>
							<i className="fas fa-user-plus"></i>{" "}
							<span className="font-heavy">Follow</span> 98K
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default ReusableCard;
