import React from "react";
import { connect } from "react-redux";
import { AnswerSubItem, ScreenLoader } from "../";
import { fetchAllQuestions } from "../../actions/session";

class AnswerMid extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchAllQuestions());
	}
	render() {
		if (this.props.session.inProgress) {
			return <ScreenLoader />;
		}
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
									borderRadius: 3,
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
						{this.props.session.questions.length === 0 ? (
							<div className="text-center">
								No Questions Currently
							</div>
						) : (
							this.props.session.questions.map(
								(question, index) => {
									return (
										<AnswerSubItem
											key={index}
											question={question}
										/>
									);
								}
							)
						)}
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
const mapStateToProps = ({ ...state }) => {
	return {
		session: state.session,
	};
};
export default connect(mapStateToProps)(AnswerMid);
