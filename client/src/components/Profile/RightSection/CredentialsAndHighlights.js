import React from "react";

class CredentialsAndHighlights extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<div className="font-16">
						<b>Credentials & Highlights</b>
					</div>
					<div>
						<button
							type="button"
							className="btn btn-light curved-button"
						>
							<i className="fas fa-pen"></i>
						</button>
					</div>
				</div>
				<hr className="my-2" />
				<div className="d-flex flex-column justify-content-start align-items-start text-dark">
					<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
						<div className="mr-2 text-secondary">
							<i className="fas fa-briefcase"></i>
						</div>
						<div>
							<span>
								Full Stack Developer Intern at Coding Ninjas
								(company)
							</span>
							<span className="text-secondary">
								{" "}
								2020 - Present
							</span>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
						<div className="mr-2 text-secondary">
							<i className="fas fa-briefcase"></i>
						</div>
						<div>
							<span>
								Bachelor or technology Electrical Engineering &
								JavaScript, Jamia Millia Islamia
							</span>
							<span className="text-secondary"> (2021)</span>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
						<div className="mr-2 text-secondary">
							<i className="fas fa-briefcase"></i>
						</div>
						<div>
							<span>Lives in New Delhi</span>
							<span className="text-secondary">
								{" "}
								2017–present
							</span>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
						<div className="mr-2 text-secondary">
							<i className="fas fa-briefcase"></i>
						</div>
						<div>
							<span>4K content views</span>
							<span className="text-secondary">
								{" "}
								224 this month
							</span>
						</div>
					</div>
					<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
						<div className="mr-2 text-secondary">
							<i className="fas fa-briefcase"></i>
						</div>
						<div>
							<span>Knows English</span>
							<span className="text-secondary"> </span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default CredentialsAndHighlights;
