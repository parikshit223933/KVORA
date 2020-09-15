import React from "react";
import "../../assets/css/stats.scss";
import { StatQuestions } from "../";

class Statistics extends React.Component {
	render() {
		return (
			<div className="container default-padding-top bg-white">
				<div className="row">
					<div className="col-12 d-flex justify-content-between align-items-center">
						<div>
							<h4>Stats</h4>
						</div>
						<div className="d-flex flex-row justifu-content-start align-items-center">
							<div>
								<div className="dropdown">
									<button
										className="btn btn-light btn-sm dropdown-toggle mx-1"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Dropdown button
									</button>
									<div
										className="dropdown-menu"
										aria-labelledby="dropdownMenuButton"
									>
										<a className="dropdown-item" href="#">
											Last 7 Days
										</a>
										<a className="dropdown-item" href="#">
											Last 30 Days
										</a>
										<a className="dropdown-item" href="#">
											Last 3 Months
										</a>
										<a className="dropdown-item" href="#">
											Last Year
										</a>
										<a className="dropdown-item" href="#">
											All Time
										</a>
									</div>
								</div>
							</div>
							<div>
								<div className="dropdown">
									<button
										className="btn btn-light btn-sm dropdown-toggle mx-1"
										type="button"
										id="dropdownMenuButton"
										data-toggle="dropdown"
										aria-haspopup="true"
										aria-expanded="false"
									>
										Dropdown button
									</button>
									<div
										className="dropdown-menu"
										aria-labelledby="dropdownMenuButton"
									>
										<a className="dropdown-item" href="#">
											Anwers
										</a>
										<a className="dropdown-item" href="#">
											Questions
										</a>
										<a className="dropdown-item" href="#">
											Shares
										</a>
										<a className="dropdown-item" href="#">
											Space Posts
										</a>
										<a className="dropdown-item" href="#">
											All Content
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row custom-reverse-flex">
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
						<div className="d-flex flex-column justify-content-start align-items-start">
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
					<div className="col-md-8">sfg</div>
				</div>
			</div>
		);
	}
}
export default Statistics;
