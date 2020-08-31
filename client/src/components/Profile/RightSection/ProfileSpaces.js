import React from "react";
import { SpacesReusable, ViewMoreButton } from "./../../";

class ProfileSpaces extends React.Component {
	render() {
		return (
			<div className="mb-3">
				<div className="font-16">
					<b>Spaces</b>
				</div>
				<hr className="my-2" />
				<div className="d-flex flex-column justify-content-center align-items-start">
					<SpacesReusable />
					<SpacesReusable />
					<SpacesReusable />
					<SpacesReusable />
					<SpacesReusable />
					<SpacesReusable />
				</div>
				<ViewMoreButton/>
			</div>
		);
	}
}
export default ProfileSpaces;
