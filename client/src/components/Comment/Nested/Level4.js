import React from "react";
import image from "../../../assets/images/signInBackground.png";
import { ActionBar, Level5 } from "../../";

class Level4 extends React.Component {
	render() {
		return (
			<div
				className="pl-3 pt-2"
				style={{ borderLeft: "2px solid rgb(230, 230, 230)" }}
			>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="mr-2">
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
					<div className="font-13">
						<b>Raghu Kumar Meshoch</b>
					</div>
					<div className="text-secondary font-13">
						<span>&bull;</span> <span>August 16</span>
					</div>
				</div>
				<div className="my-2">
					His comment is not sarcastic and it is just hilarious, if so
					called celebrity can't handle this simple issue, it
					obviously means he wants only glorifying words for his post.
				</div>
				<div>
					<ActionBar />
				</div>
				<div>
					<Level5 />
				</div>
			</div>
		);
	}
}
export default Level4;
