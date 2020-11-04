import React from "react";
import image from "../../assets/images/signInBackground.png";
import { HomeModal, HomeSingleFeed } from "../";
import { connect } from "react-redux";

class HomeFeed extends React.Component {
	render() {
		console.log(this.props.session)
		return (
			<React.Fragment>
				<div
					className="bg-white p-3 home-question-asker mb-3"
					data-toggle="modal"
					data-target="#newPost"
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
				{/* MODAL START */}
				<HomeModal />
				{/* MODAL END */}

				<div className="news-feeds">
					<HomeSingleFeed/>
					<HomeSingleFeed/>
					<HomeSingleFeed/>
					<HomeSingleFeed/>
					<HomeSingleFeed/>
					<HomeSingleFeed/>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps=({...state})=>
{
	return{
		session:state.session
	}
}
export default connect(mapStateToProps)(HomeFeed);
