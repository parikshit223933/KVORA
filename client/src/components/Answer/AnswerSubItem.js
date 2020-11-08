import React from "react";
import moment from "moment";
import { AddAnswer } from "..";

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
						<span>
							{this.props.question.associatedSpace
								? this.props.question.associatedSpace
								: "No Associated Space"}
						</span>
					</div>
					<div className="text-dark">
						<h5 style={{ fontSize: 18 }}>
							<b>{this.props.question.content}</b>
						</h5>
					</div>
					<div className="text-black-50" style={{ fontSize: 13 }}>
						<span>
							<b>{this.props.question.answers.length} Answers</b>
						</span>{" "}
						&bull;{" "}
						<span>
							Last followed{" "}
							{moment(this.props.question.lastFollowedAt).format(
								"DD MMMM YYYY"
							)}
						</span>
					</div>
					<div className="d-flex flex-row justify-content-between align-items-center flex-wrap">
						<div className="d-flex flex-row justify-content-start align-items-center mb-2">
							<div className="action-left-button">
								<button
									type="button"
									className="btn btn-sm btn-light"
									data-toggle="collapse"
									data-target={`#QUESTION-${this.props.question.questionId}`}
									aria-expanded="false"
									aria-controls={`QUESTION-${this.props.question.questionId}`}
								>
									<i className="fas fa-edit"></i> Answer
								</button>
							</div>
							<div className="action-left-button">
								<button
									type="button"
									className="btn btn-sm btn-light"
								>
									<i className="fas fa-rss"></i> Follow &bull;
									{this.props.question.followers.length}
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
				<div
					className="collapse"
					id={`QUESTION-${this.props.question.questionId}`}
				>
					<AddAnswer questionId={this.props.question.questionId} />
				</div>
				<hr className="m-0" />
			</React.Fragment>
		);
	}
}

export default AnswerSubItem;
