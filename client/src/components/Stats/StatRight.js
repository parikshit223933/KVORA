import React from "react";
import {StatShares, StatUpvotes, StatViews} from '../';

class StatRight extends React.Component {
	render() {
		return (
			<div className="col-md-8">
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li
						className="nav-item text-center"
						role="presentation"
						style={{ width: "33%", height: "100px" }}
					>
						<a
							className="nav-link active h-100"
							id="home-tab"
							data-toggle="tab"
							href="#home"
							role="tab"
							aria-controls="home"
							aria-selected="true"
						>
							<h1
								className="m-0"
								style={{ fontSize: 50, color: "black" }}
							>
								<b>208</b>
							</h1>
							<div>VIEWS</div>
						</a>
					</li>
					<li
						className="nav-item text-center"
						role="presentation"
						style={{ width: "33%", height: "100px" }}
					>
						<a
							className="nav-link h-100"
							id="profile-tab"
							data-toggle="tab"
							href="#profile"
							role="tab"
							aria-controls="profile"
							aria-selected="false"
						>
							<h1
								className="m-0"
								style={{ fontSize: 50, color: "black" }}
							>
								<b>0</b>
							</h1>
							<div>UPVOTES</div>
						</a>
					</li>
					<li
						className="nav-item text-center"
						role="presentation"
						style={{ width: "33%", height: "100px" }}
					>
						<a
							className="nav-link h-100"
							id="contact-tab"
							data-toggle="tab"
							href="#contact"
							role="tab"
							aria-controls="contact"
							aria-selected="false"
						>
							<h1
								className="m-0"
								style={{ fontSize: 50, color: "black" }}
							>
								<b>208</b>
							</h1>
							<div>SHARES</div>
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
						<StatViews/>
					</div>
					<div
						className="tab-pane fade"
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab"
					>
						<StatUpvotes/>
					</div>
					<div
						className="tab-pane fade"
						id="contact"
						role="tabpanel"
						aria-labelledby="contact-tab"
					>
						<StatShares/>
					</div>
				</div>
			</div>
		);
	}
}
export default StatRight;
