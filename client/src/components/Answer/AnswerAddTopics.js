import React from "react";

class AnswerAddTopics extends React.Component {
	render() {
		return (
			<div className="add-topics-know-about p-3 bg-white w-75 ml-auto text-dark">
				<h6>Add topics you know about</h6>
				<p className="text-secondary mb-2">
					Adding topics helps us find questions for you to answer
				</p>
				<button
					type="button"
					className="btn btn-light add-topics-button"
				>
					<b>Add topics</b>
				</button>
			</div>
		);
	}
}
export default AnswerAddTopics;
