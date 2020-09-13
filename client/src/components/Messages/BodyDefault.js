import React from "react";

class BodyDefault extends React.Component {
	render() {
		return (
			<div className="text-center w-100" style={{ color: "lightgrey" }}>
				<div className="display-4">
					<i className="fas fa-comments"></i>
				</div>
				<div className="font-20 font-heavy">No Messages</div>
				<div className="text-secondary">
					Connect with others on Quora by beginning a new
					conversation.
				</div>
			</div>
		);
	}
}
export default BodyDefault;
