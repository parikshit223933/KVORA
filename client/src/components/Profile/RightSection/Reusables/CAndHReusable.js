import React from "react";

class SpacesReusable extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row justify-content-start align-items-start my-1 font-13">
				<div className="mr-2 text-secondary">
					<i className="fas fa-briefcase"></i>
				</div>
				<div>
					<span>
						Full Stack Developer Intern at Coding Ninjas (company)
					</span>
					<span className="text-secondary"> 2020 - Present</span>
				</div>
			</div>
		);
	}
}
export default SpacesReusable;
