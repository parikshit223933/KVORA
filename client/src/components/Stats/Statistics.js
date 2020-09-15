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
					<div className="col-md-8">
						<ul className="nav nav-tabs" id="myTab" role="tablist">
							<li className="nav-item text-center" role="presentation" style={{width:'33%', height:'100px'}}>
								<a
									className="nav-link active h-100"
									id="home-tab"
									data-toggle="tab"
									href="#home"
									role="tab"
									aria-controls="home"
									aria-selected="true"
								>
									<h1 className="m-0" style={{fontSize:50, color:'black'}}><b>208</b></h1>
									<div>
										VIEWS
									</div>
								</a>
							</li>
							<li className="nav-item text-center" role="presentation" style={{width:'33%', height:'100px'}}>
								<a
									className="nav-link h-100"
									id="profile-tab"
									data-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false"
								>
									<h1 className="m-0" style={{fontSize:50, color:'black'}}><b>0</b></h1>
									<div>
										UPVOTES
									</div>
								</a>
							</li>
							<li className="nav-item text-center" role="presentation" style={{width:'33%', height:'100px'}}>
								<a
									className="nav-link h-100"
									id="contact-tab"
									data-toggle="tab"
									href="#contact"
									role="tab"
									aria-controls="contact"
									aria-selected="false"
								>
									<h1 className="m-0" style={{fontSize:50, color:'black'}}><b>208</b></h1>
									<div>
										SHARE
									</div>
								</a>
							</li>
						</ul>
						<div className="tab-content" id="myTabContent">
							<div
								className="tab-pane fade show active"
								id="home"
								role="tabpanel"
								aria-labelledby="home-tab"
							>
								adfasfasfbSFB
							</div>
							<div
								className="tab-pane fade"
								id="profile"
								role="tabpanel"
								aria-labelledby="profile-tab"
							>
								Sfaerqwertqertqwrtyqwert
							</div>
							<div
								className="tab-pane fade"
								id="contact"
								role="tabpanel"
								aria-labelledby="contact-tab"
							>
								bzxvzbxcbzxvcbzxvb
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Statistics;
