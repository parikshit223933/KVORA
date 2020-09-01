import React from "react";
import { ReusableYourSpaces } from "../";

class YourSpaces extends React.Component {
	render() {
		return (
			<div className="your-spaces bg-white pt-3 mb-4">
				<div className="d-flex flex-row align-items-center justify-content-between flex-wrap px-3">
					<div>
						<h5 className="font-weight-bolder font-19">
							Your Spaces
						</h5>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-sm font-12 text-secondary font-heavy btn-light curved-button"
						>
							Recently Visited{" "}
							<i className="fas fa-chevron-down"></i>
						</button>
					</div>
				</div>
				<div className="d-flex pl-3 flex-row justify-content-start align-items-center">
					<div>
						<button
							type="button"
							className="btn blue-tint curved-button btn-sm font-heavy mr-2"
						>
							{" "}
							<i className="fas fa-plus-circle"></i> Create a
							Space
						</button>
					</div>
					<div>
						<button
							type="button"
							className="btn blue-tint curved-button btn-sm font-heavy"
						>
							<i className="far fa-compass"></i> Discover Spaces
						</button>
					</div>
				</div>
				<div className="d-flex flex-column my-3">
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
					<ReusableYourSpaces />
				</div>
			</div>
		);
	}
}
export default YourSpaces;
