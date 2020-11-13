import React from "react";
import image from "../../../../assets/images/signInBackground.png";
import { FeedActions } from "../../../";
import htmlReactParser from 'html-react-parser';

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
									borderRadius: "100%",
								}}
							/>
						</div>
						<div className="font-weight-bolder font-13">
							{this.props.post.author.firstName +
								" " +
								this.props.post.author.lastName}
						</div>
						<div className="text-black-50 mx-1">&bull;</div>
						<div className="text-black-50 font-13">
							{this.props.post.updatedAt}
						</div>
					</div>
					<div>
						<div className="my-1 font-weight-bolder font-16">
							{this.props.post.question}
						</div>
						<div className="font-15 text-dark">
							{htmlReactParser(this.props.post.popularAnswer.answerContent)}
						</div>
					</div>
					<div className="mt-2">
						<FeedActions
							upvotes={
								this.props.post.popularAnswer
									? this.props.post.popularAnswer.upvotes
									: []
							}
							shares={this.props.post.shares}
							comments={this.props.post.comments}
							postId={this.props.post.postId}
							answerId={
								this.props.post.popularAnswer
									? this.props.post.popularAnswer.answerId
									: undefined
							}
							likedByUser={
								this.props.post.popularAnswer.likedByUser
							}
						/>
					</div>
				</div>
				<hr className="my-2" />
			</React.Fragment>
		);
	}
}
export default ProfileReusable;
