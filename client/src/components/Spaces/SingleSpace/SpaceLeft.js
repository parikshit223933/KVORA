import React from "react";
import { SpacePosts, SpaceHeader, SpaceSubHeader } from "../../";

class SpaceLeft extends React.Component {
	render() {
		return (
			<div>
				<div className="bg-white space-intro mb-2">
					<SpaceHeader />
				</div>
				<div className="bg-white p-3 space-intro">
					<SpaceSubHeader />
				</div>
				<div>
					<div>
						<button
							type="button"
							className="btn btn-light btn-sm mx-2 mt-3 curved-button dropdown-toggle"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Action
						</button>
						<div className="dropdown-menu">
							<a className="dropdown-item" href="/">
								Recent
							</a>
							<a className="dropdown-item" href="/">
								Top
							</a>
						</div>
					</div>
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
					<SpacePosts />
				</div>
			</div>
		);
	}
}

export default SpaceLeft;
