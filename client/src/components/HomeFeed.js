import React from "react";
import image from "../assets/images/signInBackground.png";
import {HomeModal} from './'
class HomeFeed extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div
					className="bg-white p-3 home-question-asker"
					data-toggle="modal"
					data-target="#exampleModalCenter"
				>
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div>
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
						<div
							className="text-secondary ml-2"
							style={{ fontSize: 12 }}
						>
							Parikshit Singh
						</div>
					</div>
					<div className="font-weight-bolder mt-2 text-secondary">
						<h5>What is your question or link?</h5>
					</div>
				</div>
				{/* MODAL */}
				<HomeModal/>
			</React.Fragment>
		);
	}
}
export default HomeFeed;
