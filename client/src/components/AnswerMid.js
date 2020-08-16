import React from "react";
import { AnswerSubItem } from "./";

class AnswerMid extends React.Component {
	render() {
		return (
			<div className="answer-mid">
				<div className="answer-mid-item bg-white mb-3">
					<header className="d-flex flex-row justify-content-start align-items-center pl-3 pt-2 pb-2">
						<div className="mr-2">
							<i
								className="fas fa-star"
								style={{
									backgroundColor: "#b92b27",
									padding: 5,
									color: "white",
									borderRadius: 3
								}}
							></i>
						</div>
						<div
							style={{ fontSize: 13 }}
							className="text-secondary"
						>
							Questions For You
						</div>
					</header>
					<hr className="m-0" />
					<div className="answer-mid-sub-item">
						<AnswerSubItem />
						<AnswerSubItem />
						<AnswerSubItem />
					</div>
					<div className="d-flex justify-content-center align-items-center flex-row p-1">
						<button
							type="button"
							className="btn btn-sm btn-light more-button text-black-50"
						>
							<b>More</b> <i className="fas fa-chevron-down"></i>
						</button>
					</div>
				</div>
			</div>
		);
	}
}
export default AnswerMid;
