import React from "react";
import image from "../../../assets/images/signInBackground.png";
import { ActivityReusable} from '../../';

class NavActivity extends React.Component {
	render() {
		return (
			<div className="px-2">
				<ActivityReusable/>
				<ActivityReusable/>
				<ActivityReusable/>
				<ActivityReusable/>
			</div>
		);
	}
}
export default NavActivity;
