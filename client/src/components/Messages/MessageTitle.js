import React from "react";
import { TitleDefault, TitleNew } from "../";

class MessageTitle extends React.Component {
	render() {
		return (
			<div>
				{this.props.getMessageMode() === "default" ? (
					<TitleDefault />
				) : (
					<TitleNew setMessageMode={this.props.setMessageMode} />
				)}
			</div>
		);
	}
}
export default MessageTitle;
