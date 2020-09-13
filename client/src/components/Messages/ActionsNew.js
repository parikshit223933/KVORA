import React from "react";

class ActionsNew extends React.Component {
	render() {
		return (
			<React.Fragment>
				<button
					type="button"
					className="btn btn-secondary"
					onClick={() => this.props.setMessageMode("default")}
				>
					Back
				</button>
				<button type="button" className="btn btn-primary">
					Send
				</button>
			</React.Fragment>
		);
	}
}
export default ActionsNew;
