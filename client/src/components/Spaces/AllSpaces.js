import React from "react";
import "../../assets/css/allSpaces.scss";
import { YourSpaces, DiscoverSpaces } from "./../";

class AllSpaces extends React.Component {
	render() {
		return (
			<div className="container all-spaces-component">
				<div className="row">
					<div className="col-md-9">
						<YourSpaces />
						<div>
							<h5 className="font-weight-bolder font-19 mb-3">
								Discover Spaces
							</h5>
						</div>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
						<DiscoverSpaces/>
					</div>
				</div>
			</div>
		);
	}
}
export default AllSpaces;
