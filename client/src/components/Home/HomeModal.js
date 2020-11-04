import React from "react";
import { connect } from "react-redux";
import { addQuestion } from "../../actions/session";
import image from "../../assets/images/signInBackground.png";
import { getAuthtokenFromLocalStorage } from "../../helpers/utils";
import jwt_decode from "jwt-decode";

class HomeModal extends React.Component {
	constructor() {
		super();
		this.state = {
			addQuestion: {
				question: "",
				link: "",
				Visibility: "Public",
			},
			shareLink: {
				opinion: "",
				link: "",
			},
			submitButtonName: "Add Question",
			submitButtonType: 0, // This can either be 0 or 1
		};
	}

	handleQuestionSubmit = () => {
		if (
			!this.state.addQuestion.Visibility ||
			!this.state.addQuestion.link ||
			!this.state.addQuestion.question
		) {
			console.log("One of the fields is empty!");
			return;
		}
		const isPublic =
			this.state.addQuestion.Visibility === "Public" ? true : false;
		const isAnonymous =
			this.state.addQuestion.Visibility === "Anonymous" ? true : false;
		const isLimited =
			this.state.addQuestion.Visibility === "Limited" ? true : false;

		this.props.dispatch(
			addQuestion(
				this.state.addQuestion.question,
				this.state.addQuestion.link,
				{
					...this.props.auth.user,
					id: jwt_decode(getAuthtokenFromLocalStorage()).id,
				},
				isPublic,
				isAnonymous,
				isLimited
			)
		);
	};

	handleResetState = () => {
		this.setState({
			addQuestion: {
				question: "",
				link: "",
				Visibility: "Public",
			},
			shareLink: {
				opinion: "",
				link: "",
			},
			submitButtonName: "Add Question",
			submitButtonType: 0,
		});
	};

	handleChangeSubmitButtons = (triggeredButtonType) => {
		if (triggeredButtonType === 0 && this.state.submitButtonType !== 0) {
			this.setState({
				...this.state,
				submitButtonName: "Add Question",
				submitButtonType: 0,
			});
		} else if (
			triggeredButtonType === 1 &&
			this.state.submitButtonType !== 1
		) {
			this.setState({
				...this.state,
				submitButtonName: "Share Link",
				submitButtonType: 1,
			});
		}
	};

	handleOnChangeForAddQuestion = (param, value) => {
		this.setState({
			...this.state,
			addQuestion: {
				...this.state.addQuestion,
				[param]: value,
			},
		});
	};

	handleOnChangeForShareLink = (param, value) => {
		this.setState({
			...this.state,
			shareLink: {
				...this.state.shareLink,
				[param]: value,
			},
		});
	};

	handleVisibilityChangeForAddQuestion = (value) => {
		this.setState({
			...this.state,
			addQuestion: {
				...this.state.addQuestion,
				Visibility: value,
			},
		});
	};

	render() {
		return (
			<div
				className="modal fade"
				id="newPost"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="newPostTitle"
				aria-hidden="true"
			>
				<div
					className="modal-dialog modal-dialog-centered modal-lg"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header new-question-modal-header pb-0">
							<b
								className="modal-title text-secondary"
								id="newPostTitle"
							>
								<nav>
									<div
										className="nav nav-tabs"
										id="nav-tab"
										role="tablist"
									>
										<a
											className="nav-link active"
											style={{
												backgroundColor: "transparent",
											}}
											id="nav-home-tab"
											data-toggle="tab"
											href="#nav-home"
											role="tab"
											aria-controls="nav-home"
											aria-selected="true"
											onClick={() =>
												this.handleChangeSubmitButtons(
													0
												)
											}
										>
											Add Question
										</a>
										<a
											className="nav-link"
											style={{
												backgroundColor: "transparent",
											}}
											id="nav-profile-tab"
											data-toggle="tab"
											href="#nav-profile"
											role="tab"
											aria-controls="nav-profile"
											aria-selected="false"
											onClick={() =>
												this.handleChangeSubmitButtons(
													1
												)
											}
										>
											Share Link
										</a>
									</div>
								</nav>
							</b>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
								onClick={() => this.handleResetState()}
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body px-5">
							<div className="tab-content" id="nav-tabContent">
								<div
									className="tab-pane fade show active"
									id="nav-home"
									role="tabpanel"
									aria-labelledby="nav-home-tab"
								>
									<div className="question-tips mb-3">
										<ul className="mb-0">
											<li
												className="list-unstyled"
												style={{
													marginLeft: "-16px",
												}}
											>
												Tips on getting good answers
												quickly
											</li>
											<li className="question-tip">
												Make sure your question has not
												been asked already
											</li>
											<li className="question-tip">
												Keep your question short and to
												the point
											</li>
											<li className="question-tip">
												Double-check grammar and
												spelling
											</li>
										</ul>
									</div>
									<div className="d-flex flex-row justify-content-start align-items-center mb-3 flex-wrap">
										<div className="mr-2">
											<img
												src={image}
												alt="user"
												style={{
													width: 20,
													height: 20,
													borderRadius: "100%",
												}}
											/>
										</div>
										<div
											className="text-secondary mr-2"
											style={{ fontSize: 13 }}
										>
											Parikshit Singh Asked
										</div>
										<div className="my-2">
											<div className="form-group mb-0">
												<select
													style={{
														borderRadius: 50,
														border:
															"1px solid #dadada",
														paddingBottom: 3,
														paddingTop: 2,
														fontSize: 15,
													}}
													className="btn btn-white"
													id="exampleFormControlSelect1"
													onChange={(event) =>
														this.handleVisibilityChangeForAddQuestion(
															event.target.value
														)
													}
												>
													<option value="Public">
														Public
													</option>
													<option value="Anonymous">
														Anonymous
													</option>
													<option value="Limited">
														Limited
													</option>
												</select>
											</div>
										</div>
									</div>
									<div className="mb-3">
										<input
											type="text"
											placeholder='Start your question with "What", "How", "Why", etc.'
											className="form-control question-input pb-3"
											onChange={(event) =>
												this.handleOnChangeForAddQuestion(
													"question",
													event.target.value
												)
											}
											value={
												this.state.addQuestion.question
											}
										/>
									</div>
									<div className="d-flex flex-row justify-content-start align-items-center">
										<div>
											<i className="fas fa-link"></i>
										</div>
										<div className="w-75 ml-1">
											<input
												type="text"
												placeholder="Optional: Include a link that gives context"
												className="form-control link-provider-input form-control-sm"
												onChange={(event) =>
													this.handleOnChangeForAddQuestion(
														"link",
														event.target.value
													)
												}
												value={
													this.state.addQuestion.link
												}
											/>
										</div>
									</div>
									<div className="existing-question-suggestions"></div>
								</div>
								<div
									className="tab-pane fade"
									id="nav-profile"
									role="tabpanel"
									aria-labelledby="nav-profile-tab"
								>
									<div className="d-flex flex-row justify-content-start align-items-center mb-3 flex-wrap">
										<div className="mr-2">
											<img
												src={image}
												alt="user"
												style={{
													width: 20,
													height: 20,
													borderRadius: "100%",
												}}
											/>
										</div>
										<div
											className="text-secondary mr-2"
											style={{ fontSize: 13 }}
										>
											Parikshit Singh shared
										</div>
										<div className="my-2">
											<button
												type="button"
												style={{
													borderRadius: 50,
													border: "1px solid #dadada",
													paddingBottom: 3,
													paddingTop: 2,
													fontSize: 15,
												}}
												className="btn btn-light"
											>
												<i
													className="fas fa-user-friends"
													style={{ opacity: 0.5 }}
												></i>{" "}
												Choose a Space{" "}
												<i
													className="fas fa-chevron-down"
													style={{ opacity: 0.5 }}
												></i>
											</button>
										</div>
									</div>
									<div>
										<input
											type="text"
											placeholder="Say something about this..."
											className="form-control link-provider-input form-control-sm mb-4"
											onChange={(event) =>
												this.handleOnChangeForShareLink(
													"opinion",
													event.target.value
												)
											}
											value={this.state.shareLink.opinion}
										/>
									</div>
									<div className="linker">
										<div className="linker-link-icon">
											<i className="fas fa-link"></i>
										</div>
										<div>
											<input
												type="text"
												placeholder="Enter a link"
												className="form-control share-link form-control-sm"
												onChange={(event) =>
													this.handleOnChangeForShareLink(
														"link",
														event.target.value
													)
												}
												value={
													this.state.shareLink.link
												}
											/>
										</div>
									</div>
									<div className="linker-spacing"></div>
								</div>
							</div>
						</div>
						<div
							className="modal-footer"
							style={{ backgroundColor: "#f7f7f8" }}
						>
							<button
								type="button"
								className="btn btn-light"
								style={{ borderRadius: "50px" }}
								data-dismiss="modal"
								onClick={() => this.handleResetState()}
							>
								Cancel
							</button>
							<button
								type="button"
								className="btn btn-primary"
								style={{ borderRadius: "50px" }}
								onClick={(event) => this.handleQuestionSubmit()}
							>
								{this.state.submitButtonName}
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ ...state }) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(HomeModal);
