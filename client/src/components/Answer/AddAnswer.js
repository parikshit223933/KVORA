import React from "react";
import { connect } from "react-redux";
import image from "../../assets/images/signInBackground.png";
import {RichEditorExample} from '..'

class AddAnswer extends React.Component {
	render() {
		return (
			<div
				className="m-2 rounded"
				style={{
					backgroundColor: "#f7f7f8",
					border: "2px solid #f1f2f2",
				}}
			>
				<div className="d-flex flex-row justify-content-start align-items-center p-3">
					<div className="mr-3">
						<img
							src={image}
							alt="user"
							style={{
								width: 50,
								height: 50,
								borderRadius: "100%",
							}}
						/>
					</div>
					<div className="d-flex flex-column">
						<div>
							<b className="text-capitalize">
								{this.props.auth.user &&
									this.props.auth.user.firstName +
										" " +
										this.props.auth.user.lastName}
							</b>
						</div>
						<div className="text-secondary">Edit Credential</div>
					</div>
				</div>
				<div style={{ backgroundColor: "white" }}>
					<div>
						<RichEditorExample />
					</div>
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center p-2">
					<div className="d-flex flex-row">
						<div className="mx-1">
							<button
								type="button"
								className="btn btn-sm curved-button btn-primary font-14 bold"
							>
								Submit
							</button>
						</div>
						<div className="mx-1">
							<button
								type="button"
								className="btn btn-sm curved-button btn-light font-14 bold"
							>
								Save Draft
							</button>
						</div>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-sm curved-button btn-light font-14 bold"
						>
							<i className="fas fa-ellipsis-h"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStatetoProps = ({ ...state }) => {
	return {
		auth: state.auth,
	};
};

export default connect(mapStatetoProps)(AddAnswer);
