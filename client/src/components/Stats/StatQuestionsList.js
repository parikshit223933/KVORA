import React from "react";
import { StatQuestions } from "..";

class StatQuestionsList extends React.Component {
	render() {
		return (
			<div
				className="col-md-4 px-0"
				style={{
					backgroundColor: "#fafafa",
					borderTop: "1px solid #e1e1e1",
				}}
			>
				<div className="p-2 w-100 bg-white">
					<b style={{ color: "#2b6dad" }}>All Answers</b>
				</div>
				<hr className="my-0" />
				<div
					className="d-flex flex-column justify-content-start align-items-start"
					style={{ height: "80vh", overflowY: "scroll" }}
				>
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
					<StatQuestions />
				</div>
			</div>
		);
	}
}
export default StatQuestionsList;
