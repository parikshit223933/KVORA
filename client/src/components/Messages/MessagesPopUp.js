import React from "react";
import { MessagePopUpBody, MessageActions, MessageTitle } from "../";

class MessagesPopUp extends React.Component {
	constructor() {
		super();
		this.state = {
			messageMode: "default",
		};
		//messageMode can be "default" or "new"
	}
	getMessageMode = () => {
		return this.state.messageMode;
	};
	setMessageMode = (newMessageMode) => {
		this.setState({
			messageMode: newMessageMode,
		});
	};
	render() {
		return (
			<div
				className="modal fade"
				id="messages-modal"
				tabIndex="-1"
				aria-labelledby="messageslabel"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered">
					<div className="modal-content">
						<div className="modal-header">
							<MessageTitle
								getMessageMode={this.getMessageMode}
								setMessageMode={this.setMessageMode}
							/>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<MessagePopUpBody
								getMessageMode={this.getMessageMode}
							/>
						</div>
						<div className="modal-footer">
							<MessageActions
								getMessageMode={this.getMessageMode}
								setMessageMode={this.setMessageMode}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default MessagesPopUp;
