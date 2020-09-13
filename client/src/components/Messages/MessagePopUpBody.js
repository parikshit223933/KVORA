import React from "react";
import { BodyNew, BodyDefault } from "../";

class MessagePopUpBody extends React.Component {
	render() {
		return (
			<div>
				{this.props.getMessageMode() === "default" ? (
					<BodyDefault />
				) : (
					<BodyNew />
				)}
			</div>
		);
	}
}
export default MessagePopUpBody;
