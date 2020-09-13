import React from "react";

class TitleDefault extends React.Component {
	render() {
		return (
			<h5 className="modal-title" id="messageslabel">
				<i
					className="fas fa-angle-left"
					style={{cursor:'pointer'}}
					onClick={() => this.props.setMessageMode("default")}
				></i>{" "}
				New Message
			</h5>
		);
	}
}
export default TitleDefault;
