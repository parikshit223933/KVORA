import React from "react";
import image from "../../../assets/images/signInBackground.png";

class ReusableYourSpaces extends React.Component {
	render() {
		return (
			<div>
				<div className="py-2 pl-3 d-flex flex-row justify-content-start align-items-center">
					<div className="mr-2">
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
					<div className="font-13">
						<b>Tech Programming</b>
					</div>
				</div>
				<hr className="my-0" />
			</div>
		);
	}
}
export default ReusableYourSpaces;
