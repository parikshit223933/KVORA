import React from "react";

class ContentFilter extends React.Component {
	render() {
		return (
			<div className="px-2">
				<div className="mb-4">
					<div className="px-2">
						<b>By Content Type</b>
					</div>
					<hr className="my-2" />
					<div className="d-flex flex-column justify-content-start align-items-start">
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							All Types
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							Questions Asked
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							Questions Followed
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							Answers
						</div>
					</div>
				</div>
				<div className="mb-4">
					<div className="px-2">
						<b>By Topic</b>
					</div>
					<hr className="my-2" />
					<div className="d-flex flex-column justify-content-start align-items-start">
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							All Topics
						</div>
						<div>
							<input
								type="text"
								className="form-control form-control-sm"
								placeholder="Search for a topic"
								aria-describedby="topic_search"
							/>
						</div>
					</div>
				</div>
				<div className="mb-4">
					<div className="px-2">
						<b>By Year</b>
					</div>
					<hr className="my-2" />
					<div className="d-flex flex-column justify-content-start align-items-start">
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							All Time
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							2020
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							2019
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							2018
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							2017
						</div>
					</div>
				</div>
				<div className="mb-4">
					<div className="px-2">
						<b>Sort Order</b>
					</div>
					<hr className="my-2" />
					<div className="d-flex flex-column justify-content-start align-items-start">
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							Newest First
						</div>
						<div className="w-100 font-13 px-2 py-1 text-secondary">
							Oldest First
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default ContentFilter;
