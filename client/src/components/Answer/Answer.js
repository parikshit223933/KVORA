import React from "react";
import '../../assets/css/answer.scss';
import {AnswerAddTopics, AnswerQuestions, AnswerMid} from '../';

class Answer extends React.Component {
	render() {
		return (
			<div className="answer-component container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none"><AnswerQuestions/></div>
					<div className="col-lg-7 col-md-9 col-sm-12"><AnswerMid/></div>
					<div className="col-lg-3 d-lg-block d-none"><AnswerAddTopics/></div>
				</div>
			</div>
		);
	}
}
export default Answer;
