import React from "react";
import {Link} from 'react-router-dom';

class HomeSpace extends React.Component {
	render() {
		return this.props.active ? (
			<Link to="/spaces/123" className="left-space-item ghost-link left-space-item-active w-100 pl-2 d-flex flex-row justify-content-start align-items-center">
				<div className="left-space-item-image">
					<i
						className="fas fa-newspaper"
						style={{ fontSize: "18px" }}
					></i>
				</div>
				<div className="left-space-item-name pl-2">Feed</div>
			</Link>
		) : (
			<Link to="/spaces/123" className="left-space-item ghost-link w-100 pr-1 pl-2 d-flex flex-row justify-content-start align-items-center text-secondary">
				<div className="left-space-item-image">
					<i
						className="fas fa-newspaper"
						style={{ fontSize: "18px" }}
					></i>
				</div>
				<div className="left-space-item-name pl-2">Feed</div>
			</Link>
		);
	}
}
export default HomeSpace;
