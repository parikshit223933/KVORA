import React from "react";
import { ProfileReusable } from "../../";

class NavAnswers extends React.Component {
	render() {
		return (
			<div>
				{this.props.posts.map((post, index) => {
					return <ProfileReusable post={post} index={index} />;
				})}
			</div>
		);
	}
}
export default NavAnswers;
