import React from "react";

class AnswerSubItem extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="p-3">
					<div
						className="text-black-50 mb-2"
						style={{ fontSize: 13 }}
					>
						<span>Question added</span> &bull;{" "}
						<span>New Delhi</span>
					</div>
					<div className="text-dark">
						<h5 style={{ fontSize: 18 }}>
							<b>What is "Lutyens’ Delhi"?</b>
						</h5>
					</div>
					<div className="text-black-50" style={{ fontSize: 13 }}>
						<span>
							<b>3 Answers</b>
						</span>{" "}
						&bull; <span>Last followed July 1</span>
					</div>
					<div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
						<div className="d-flex flex-row justify-content-start align-items-center mb-2">
							<div className="action-left-button">
								<button
									type="button"
									className="btn btn-sm btn-light"
								>
									<i className="fas fa-edit"></i> Answer
								</button>
							</div>
							<div className="action-left-button">
								<button
									type="button"
									className="btn btn-sm btn-light"
								>
									<i className="fas fa-rss"></i> Follow &bull; 8
								</button>
							</div>
							<div className="action-left-button">
								<button
									type="button"
									className="btn btn-sm btn-light"
								>
									<i className="fas fa-ban"></i> Pass
								</button>
							</div>
						</div>
						<div className="d-flex flex-row justify-content-start align-items-center mb-2">
							<div>
								<button
									type="button"
									style={{ borderRadius: "50%" }}
									className="btn btn-light mr-1"
								>
									<i className="fas fa-thumbs-down"></i>
								</button>
							</div>
							<div>
								<button
									type="button"
									style={{ borderRadius: "50%" }}
									className="btn btn-light mx-1"
								>
									<i className="fas fa-share"></i>
								</button>
							</div>
							<div>
								<button
									type="button"
									style={{ borderRadius: "50%" }}
									className="btn btn-light ml-1"
								>
									<i className="fas fa-ellipsis-h"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
				<hr className="m-0" />
			</React.Fragment>
		);
	}
}
export default AnswerSubItem;
