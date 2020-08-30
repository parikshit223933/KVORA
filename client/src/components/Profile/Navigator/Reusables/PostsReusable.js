import React from "react";
import image from "../../../../assets/images/signInBackground.png";
import FeedActions from "../../../Home/FeedActions";

class PostsReusable extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex flex-row justify-content-start align-items-center mb-2">
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
							Shared by John Gragson
						</div>
					</div>
				</div>
				<div className="text-dark">
					<b>16 August 2020 (3 July 2020)</b>
				</div>
				<div>
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
				<div className="my-2">
					<small className="text-secondary font-12">
						68 views &bull; View 14 Upvoters
					</small>
				</div>
				<div>
					<FeedActions />
				</div>
				<hr />
			</div>
		);
	}
}
export default PostsReusable;
