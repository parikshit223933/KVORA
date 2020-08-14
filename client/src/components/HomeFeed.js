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
					class="modal fade"
					id="exampleModalCenter"
					tabindex="-1"
					role="dialog"
					aria-labelledby="exampleModalCenterTitle"
					aria-hidden="true"
				>
					<div
						class="modal-dialog modal-dialog-centered"
						role="document"
					>
						<div class="modal-content">
							<div class="modal-header">
								<h5
									class="modal-title"
									id="exampleModalCenterTitle"
								>
									Modal title
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">...</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save changes
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
