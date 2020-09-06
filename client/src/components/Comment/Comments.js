import React from "react";
import { Comment } from "../";

class Comments extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
					<Comment />
				</div>
				<hr />
			</React.Fragment>
		);
	}
}
export default Comments;
