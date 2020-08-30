import React from "react";
import {FeedActions} from '../../../';
import image from "../../../../assets/images/signInBackground.png";

class ActivityReusable extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="ml-0 mr-1">
						<img
							src={image}
							alt="user"
							style={{
								width: 20,
								height: 20,
								borderRadius: "100%"
							}}
						/>
					</div>
					<div className="text-secondary font-13">
						John Gragson posted this &bull; August 17
					</div>
				</div>

				<div className="d-flex flex-row justify-content-start align-items-center my-2">
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
					<div>
						<div className="font-13">
							<span className="font-weight-bolder">
								Parikshit Singh
							</span>{" "}
							&bull;{" "}
							<span className="text-secondary">June 25</span>
						</div>
						<div className="text-black-50 font-13">
							Posted by John Gragson
						</div>
					</div>
				</div>
				<div className="font-weight-bolder font-16 mb-2">
					16 August 2020 (3 July 2020)
				</div>
				<div className="mb-2">
					I haven’t been on here in about six weeks, and don’t feel
					particularly motivated to spend time here right now, so I
					will be deactivating. I’m not officially “quitting;” I may
					come back in October after some stuff I have to deal with at
					work has hopefully been resolved and the weather outside
					gets crappy.
					<br />
					<br />I can be found on FB if anyone needs to get hold of
					me.
				</div>
				<div className="font-13 text-secondary">
					69 views &bull; View 14 Upvoters
				</div>
				<div className="my-3">
					<FeedActions />
				</div>
				<hr />
			</React.Fragment>
		);
	}
}
export default ActivityReusable;
