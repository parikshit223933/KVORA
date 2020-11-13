import React from "react";
import { ProfileReusable } from "../../";

class NavProfile extends React.Component {
	render() {
		return (
			<div>
				{this.props.posts.map((post, index) => {
					return <ProfileReusable post={post} key={index} />;
				})}
			</div>
		);
	}
}
export default NavProfile;
