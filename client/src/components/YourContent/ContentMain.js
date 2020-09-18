import React from "react";
import { ContentItems } from "../";

class ContentMain extends React.Component {
	render() {
		return (
			<div>
				<div>
					<div className="mb-2">
						<b>Your Content</b>
					</div>
					<hr className="my-0" />
					<div>
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
						<ContentItems />
					</div>
				</div>
			</div>
		);
	}
}
export default ContentMain;
