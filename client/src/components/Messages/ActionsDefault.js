import React from "react";

class ActionsDefault extends React.Component {
	render() {
		return (
			<React.Fragment>
				<button
					type="button"
					className="btn btn-secondary"
					data-dismiss="modal"
				>
					Cancel
				</button>
				<button
					type="button"
					className="btn btn-primary"
					onClick={() => this.props.setMessageMode("new")}
				>
					New Message
				</button>
			</React.Fragment>
		);
	}
}
export default ActionsDefault;
