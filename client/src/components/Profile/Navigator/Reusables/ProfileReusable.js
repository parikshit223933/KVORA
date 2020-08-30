import React from "react";
import image from "../../../../assets/images/signInBackground.png";
import {FeedActions} from '../../../';

class ProfileReusable extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div className="ml-0 mr-2">
							<img
								src={image}
								alt="user"
								style={{
									width: 40,
									height: 40,
									borderRadius: "100%"
								}}
							/>
						</div>
						<div className="font-weight-bolder font-13">
							Parikshit Singh
						</div>
						<div className="text-black-50 mx-1">&bull;</div>
						<div className="text-black-50 font-13">August 16</div>
					</div>
					<div>
						<div className="my-1 font-weight-bolder font-16">
							Is React.js a JavaScript framework?
						</div>
						<div className="font-15 text-dark">
							No its a JS library, whereas Angular is a JS
							framework.
						</div>
					</div>
					<div className="mt-2">
						<FeedActions />
					</div>
				</div>
				<hr className="my-2" />
			</React.Fragment>
		);
	}
}
export default ProfileReusable;
