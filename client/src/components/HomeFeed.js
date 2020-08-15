import React from "react";
import image from "../assets/images/signInBackground.png";

class HomeFeed extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="bg-white p-3 home-question-asker"
					data-toggle="modal"
					data-target="#exampleModalCenter"
				>
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div>
							<img
								src={image}
								alt="user"
								style={{
									width: 20,
									height: 20,
									borderRadius: "100%"
								}}
							/>
						</div>
						<div
							className="text-secondary ml-2"
							style={{ fontSize: 12 }}
						>
							Parikshit Singh
						</div>
					</div>
					<div className="font-weight-bolder mt-2 text-secondary">
						<h5>What is your question or link?</h5>
					</div>
				</div>
				{/* MODAL */}
				<div
					className="modal fade"
					id="exampleModalCenter"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
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
									id="exampleModalCenterTitle"
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
													backgroundColor:
														"transparent"
												}}
												id="nav-home-tab"
												data-toggle="tab"
												href="#nav-home"
												role="tab"
												aria-controls="nav-home"
												aria-selected="true"
											>
												Add Question
											</a>
											<a
												className="nav-link"
												style={{
													backgroundColor:
														"transparent"
												}}
												id="nav-profile-tab"
												data-toggle="tab"
												href="#nav-profile"
												role="tab"
												aria-controls="nav-profile"
												aria-selected="false"
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
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body px-5">
								<div
									className="tab-content"
									id="nav-tabContent"
								>
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
														marginLeft: "-16px"
													}}
												>
													Tips on getting good answers
													quickly
												</li>
												<li className="question-tip">
													Make sure your question has
													not been asked already
												</li>
												<li className="question-tip">
													Keep your question short and
													to the point
												</li>
												<li className="question-tip">
													Double-check grammar and
													spelling
												</li>
											</ul>
										</div>
										<div className="d-flex flex-row justify-content-start align-items-center mb-3">
											<div className="mr-2">
												<img
													src={image}
													alt="user"
													style={{
														width: 20,
														height: 20,
														borderRadius: "100%"
													}}
												/>
											</div>
											<div
												className="text-secondary mr-2"
												style={{ fontSize: 13 }}
											>
												Parikshit Singh Asked
											</div>
											<div>
												<button
													type="button"
													style={{
														borderRadius: 50,
														border:
															"1px solid #dadada",
														paddingBottom: 3,
														paddingTop: 2,
														fontSize: 15
													}}
													className="btn btn-light"
												>
													<i
														className="fas fa-user-friends"
														style={{ opacity: 0.5 }}
													></i>{" "}
													Public{" "}
													<i
														className="fas fa-chevron-down"
														style={{ opacity: 0.5 }}
													></i>
												</button>
											</div>
										</div>
										<div className="mb-3">
											<input
												type="text"
												placeholder='Start your question with "What", "How", "Why", etc.'
												className="form-control question-input pb-3"
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
										adfsd
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
								>
									Cancel
								</button>
								<button
									type="button"
									className="btn btn-primary"
									style={{ borderRadius: "50px" }}
								>
									Add Question
								</button>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
export default HomeFeed;
