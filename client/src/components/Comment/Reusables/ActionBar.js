import React from "react";

class ActionBar extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row justify-content-between align-items-center">
				<div className="d-flex flex-row">
					<div>
						<button
							type="button"
							className="btn btn-light btn-sm curved-button text-secondary"
						>
							<i className="fas fa-thumbs-up font-13"></i>{" "}
							<span className="font-13">1.3K</span>
						</button>
					</div>
					<div className="ml-2">
						<button
							type="button"
							className="btn btn-light btn-sm curved-button text-secondary font-13"
						>
							<i className="fas fa-reply"></i>{" "}
							<span className="font-heavy">Reply</span>
						</button>
					</div>
				</div>
				<div className="d-flex flex-row">
					<div>
						<button
							type="button"
							className="btn btn-light btn-sm curved-button text-secondary font-13"
						>
							<i className="fas fa-thumbs-down"></i>
						</button>
					</div>
					<div className="ml-2">
						<button
							type="button"
							className="btn btn-light btn-sm curved-button text-secondary font-13"
						>
							<i className="fas fa-ellipsis-h"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default ActionBar;
