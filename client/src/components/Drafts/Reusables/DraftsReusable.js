import React from "react";

class DraftsReusable extends React.Component {
	render() {
		return (
			<div className="p-3 my-2 bg-white rounded">
				<div className="text-secondary">Answer &bull; Unpublished</div>
				<div>
					<h5 className="my-1">
						How do I install an NPM package in React.js?
					</h5>
				</div>
				<div>
					<p className="mb-2">
						by just writing npm install {"<package_name>"}, for
						example npm install recharts
					</p>
				</div>
				<div className="d-flex flex-row justify-content-start align-items-start">
					<button
						type="button"
						className="btn btn-sm btn-light mr-1 curved-button"
					>
						<i className="text-secondary fas fa-edit"></i> Edit Draft
					</button>
					<button
						type="button"
						className="btn btn-sm btn-light ml-1 curved-button"
					>
						<i className="text-secondary fas fa-eraser"></i> Delete Draft
					</button>
				</div>
			</div>
		);
	}
}
export default DraftsReusable;
