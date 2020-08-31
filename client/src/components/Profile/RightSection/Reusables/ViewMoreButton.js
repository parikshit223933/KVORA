import React from "react";

class ViewMoreButton extends React.Component {
	render() {
		return (
			<div>
				<button
					type="button"
					className="btn btn-sm btn-light curved-button"
					style={{ border: "1px solid grey" }}
				>
					View More <i className="fa fa-chevron-down"></i>
				</button>
			</div>
		);
	}
}
export default ViewMoreButton;