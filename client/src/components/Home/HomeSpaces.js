import React from "react";
import { HomeSpace } from "../";

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
					<li className="list-inline-item">About</li>
					<li className="list-inline-item">Careers</li>
					<li className="list-inline-item">Terms</li>
					<li className="list-inline-item">Privacy</li>
					<li className="list-inline-item">Acceptable Use</li>
					<li className="list-inline-item">Businesses</li>
					<li className="list-inline-item">Your Ad Choices</li>
				</ul>
			</div>
		);
	}
}
export default HomeSpaces;
