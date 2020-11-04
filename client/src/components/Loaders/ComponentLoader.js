import React from "react";

class ComponentLoader extends React.Component {
	render() {
		const loaderSize = 50;
		const unit = "px";
		return (
			<div
				className="d-flex flex-row justify-content-center align-items-center"
			>
				<div
					className="spinner-border text-danger"
					style={{
						width: `${loaderSize}${unit}`,
						height: `${loaderSize}${unit}`,
					}}
					role="status"
				>
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
}
export default ComponentLoader;
