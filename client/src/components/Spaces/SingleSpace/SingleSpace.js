import React from "react";
import "../../../assets/css/singleSpace.scss";
import { SpaceLeft, SpaceRight } from "./../../";

class SingleSpace extends React.Component {
	render() {
		console.log("hola");
		return (
			<div className="container profile-component">
				<div className="row">
					<div className="col-md-8">
						<SpaceLeft />
					</div>
					<div className="col-md-4 d-none d-md-block">
						<SpaceRight />
					</div>
				</div>
			</div>
		);
	}
}
export default SingleSpace;
