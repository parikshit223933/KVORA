import React from "react";

class GlobeDropDown extends React.Component {
	render() {
		return (
			<div
				className="dropdown-menu position-absolute"
				style={{ width: 230, left: -100 }}
				aria-labelledby="dropdownMenuButton"
			>
				<div className="pl-3 text-secondary">
					<b style={{ fontSize: 15 }}>Languages</b>
				</div>
				<hr className="my-2" />
				<a
					className="py-2 dropdown-item d-flex w-100 flex-row justify-content-between align-items-center px-3"
					href="/"
					style={{ width: "max-content" }}
				>
					<div className="d-flex flex-row justify-content-between align-items-center">
						<div className="circular-badge">EN</div>
						<div
							className="mr-5 font-weight-bold text-black-50"
							style={{ fontSize: 15 }}
						>
							English
						</div>
					</div>
					<div className="tick-mark">
						<i className="far fa-check-circle"></i>
					</div>
				</a>
				<a
					className="py-2 dropdown-item d-flex w-100 flex-row justify-content-between align-items-center px-3"
					href="/"
					style={{ width: "max-content" }}
				>
					<div className="d-flex flex-row justify-content-between align-items-center">
						<div
							className="circular-badge"
							style={{
								backgroundColor: "#00a34b"
							}}
						>
							HI
						</div>
						<div
							className="mr-5 font-weight-bold text-black-50"
							style={{ fontSize: 15 }}
						>
							Hindi
						</div>
					</div>
					<div className="tick-mark" style={{ color: "#b92b27" }}>
						<i className="fas fa-exclamation-circle"></i>
					</div>
				</a>
				<hr className="my-2" />
				<a
					href="/"
					className="dropdown-item font-weight-bold text-black-50 pl-3"
					style={{ fontSize: 12 }}
				>
					Add Language
				</a>
				<a
					href="/"
					className="dropdown-item font-weight-bold text-black-50 pl-3"
					style={{ fontSize: 12 }}
				>
					See all languages
				</a>
			</div>
		);
	}
}

export default GlobeDropDown;
