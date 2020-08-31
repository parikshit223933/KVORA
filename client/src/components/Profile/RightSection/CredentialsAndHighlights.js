import React from "react";
import {CAndHReusable} from '../../';

class CredentialsAndHighlights extends React.Component {
	render() {
		return (
			<div className="mb-3">
				<div className="d-flex flex-row justify-content-between align-items-center">
					<div className="font-16">
						<b>Credentials & Highlights</b>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-light curved-button"
						>
							<i className="fas fa-pen"></i>
						</button>
					</div>
				</div>
				<hr className="my-2" />
				<div className="d-flex flex-column justify-content-start align-items-start text-dark">
					<CAndHReusable/>
					<CAndHReusable/>
					<CAndHReusable/>
					<CAndHReusable/>
					<CAndHReusable/>
					<CAndHReusable/>
				</div>
			</div>
		);
	}
}
export default CredentialsAndHighlights;
