import React from "react";
import { HomeSpace } from "../";
import { Link } from "react-router-dom";

class HomeSpaces extends React.Component {
	render() {
		return (
			<div className="w-100 d-flex flex-column justify-content-start align-items-start pr-2">
				<HomeSpace active={true} />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<HomeSpace />
				<div className="left-space-item w-100 pr-1 pl-2 d-flex flex-row justify-content-start align-items-center text-secondary mb-4">
					<div className="left-space-item-image">
						<i
							className="fas fa-plus-square"
							style={{ fontSize: "18px" }}
						></i>
					</div>
					<div className="left-space-item-name pl-2">
						Discover Spaces
					</div>
				</div>
				<hr className="w-100" />
				<ul
					style={{ fontSize: "12px" }}
					className="py-2 pr-2 text-secondary pl-0 extra-list"
				>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/about">
							About
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/careers">
							Careers
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/terms">
							Terms
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/privacy">
							Privacy
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/acceptable-use">
							Acceptable Use
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/business">
							Businesses
						</Link>
					</li>
					<li className="list-inline-item">
						<Link className="ghost-link" to="/your-ad-choices">
							Your Ad Choices
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
export default HomeSpaces;
