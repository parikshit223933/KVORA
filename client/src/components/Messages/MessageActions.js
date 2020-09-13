import React from "react";
import { ActionsNew, ActionsDefault } from "../";

class MessageActions extends React.Component {
	render() {
		return (
			<React.Fragment>
				{this.props.getMessageMode() === "default" ? (
					<ActionsDefault
						setMessageMode={this.props.setMessageMode}
					/>
				) : (
					<ActionsNew setMessageMode={this.props.setMessageMode} />
				)}
			</React.Fragment>
		);
	}
}
export default MessageActions;
