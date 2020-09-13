import React from "react";

class BodyNew extends React.Component {
	render() {
		return (
			<form>
				<div className="form-group">
					<input
						type="text"
						className="form-control"
						aria-describedby="emailHelp"
						placeholder="Enter a name"
					/>
				</div>
				<div className="form-group">
					<textarea
						className="form-control"
						placeholder="Type a message..."
						rows="4"
					></textarea>
				</div>
			</form>
		);
	}
}
export default BodyNew;
