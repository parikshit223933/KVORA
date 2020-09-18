import React from "react";
import { ContentFilter, ContentMain } from "../";

class YourContentLanding extends React.Component {
	render() {
		return (
			<div className="default-padding-top container">
				<div className="row">
					<div className="col-md-4">
						<ContentFilter />
					</div>
					<div className="col-md-8">
						<ContentMain />
					</div>
				</div>
			</div>
		);
	}
}
export default YourContentLanding;
