import React from "react";

class FeedActions extends React.Component {
	render() {
		return (
			<div className="feed-item-footer d-flex flex-row justify-content-between align-items-center text-secondary">
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="mr-3">
						<span>
							<i className="far fa-heart"></i>
						</span>{" "}
						<span>2.3K</span>
					</div>
					<div className="mr-3">
						<span>
							<i className="fas fa-sync-alt"></i>
						</span>{" "}
						<span>17</span>
					</div>
					<div className="mr-3">
						<span>
							<i className="far fa-comment"></i>
						</span>{" "}
						<span>30</span>
					</div>
				</div>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="mr-3">
						<span>
							<i className="fas fa-heart-broken"></i>
						</span>
					</div>
					<div className="mr-3">
						<span>
							<i className="fas fa-share"></i>
						</span>
					</div>
					<div className="mr-3">
						<span
							className="cursor-pointer"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-ellipsis-h"></i>
						</span>

						<div className="dropdown-menu text-black-50">
							<a className="dropdown-item" href="/">Pin to Profile</a>
							<a className="dropdown-item" href="/">Translate Answer</a>
							<a className="dropdown-item" href="/">Bookmark</a>
							<a className="dropdown-item" href="/">Not For Reproduction</a>
							<a className="dropdown-item" href="/">Not For Translation</a>
							<a className="dropdown-item" href="/">Disable Comments</a>
							<a className="dropdown-item" href="/">Edit Answer</a>
							<a className="dropdown-item" href="/">Edit Credential</a>
							<a className="dropdown-item" href="/">Downvate Question</a>
							<a className="dropdown-item" href="/">Log</a>
							<a className="dropdown-item" href="/">Delete Answer</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default FeedActions;