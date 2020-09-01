import React from "react";
import "../../assets/css/allSpaces.css";
import {YourSpaces} from './../';

class AllSpaces extends React.Component {
	render() {
		return (
			<div className="container all-spaces-component">
				<div className="row">
					<div className="col-md-9">
						<YourSpaces/>
					</div>
				</div>
			</div>
		);
	}
}
export default AllSpaces;
