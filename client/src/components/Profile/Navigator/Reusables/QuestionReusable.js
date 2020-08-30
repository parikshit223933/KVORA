import React from "react";

class QuestionReusable extends React.Component {
	render() {
		return (
			<div>
				<div className="font-weight-bolder font-18 text-dark mb-2">
					Which library/framework among Angular and React has a
					greater future scope?
				</div>
				<div className="font-13 text-secondary">
					<b>No Answer Yet</b> &bull; Last Followed 27m ago
				</div>
				<div className="d-flex flex-row justify-content-between align-items-center flex-wrap mt-1">
					<div className="d-flex flex-row justify-content-start align-items-center">
						<button
							type="button"
							className="btn btn-light btn-sm curved-button font-weight-bolder text-secondary"
						>
							<i className="fas fa-pen-alt"></i> Answer
						</button>
						<button
							type="button"
							className="btn btn-light btn-sm curved-button font-weight-bolder text-secondary"
						>
							<i className="fas fa-rss"></i> Follow &bull; 1
						</button>
					</div>
					<div className="d-flex flex-row justify-content-start align-items-center">
						<button type="button" className="btn btn-light text-secondary curved-button">
                        <i className="fas fa-heart-broken"></i>
						</button>
						<button type="button" className="btn btn-light text-secondary curved-button">
                        <i className="fas fa-share"></i>
						</button>
						<button type="button" className="btn btn-light text-secondary curved-button">
                        <i className="fas fa-ellipsis-h"></i>
						</button>
					</div>
				</div>
				<hr />
			</div>
		);
	}
}
export default QuestionReusable;
