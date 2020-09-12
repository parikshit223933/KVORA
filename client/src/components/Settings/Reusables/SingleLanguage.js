import React from "react";

class SingleLanguage extends React.Component {
	render() {
		return (
			<div className="pr-3">
				<div className="d-flex flex-row justify-content-between align-items-center py-2">
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div
							style={{
								backgroundColor: "red",
								width: 35,
								height: 35,
								borderRadius: "100%",
								color: "white",
							}}
							className="d-flex font-heavy mr-2 flex-row align-items-center justify-content-center"
						>
							EN
						</div>
						<div>English</div>
					</div>
					<div>Primary</div>
				</div>
				<hr className="my-0" />
			</div>
		);
	}
}
export default SingleLanguage;
