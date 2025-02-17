import React from "react";
import image from "../../assets/images/signInBackground.png";
import { FeedActions, NewComment, Comments } from "../";
import moment from "moment";
import htmlReactParser from "html-react-parser";
class HomeSingleFeed extends React.Component {
	render() {
		return (
			<div className="mb-3 feed-item">
				<div style={{ padding: 15 }}>
					<div className="feed-item-header mb-1">
						Answer &#8226; Recomended for you
					</div>
					<div className="d-flex flex-row justify-content-start align-items-center mb-2">
						<div className="mr-2">
							<img
								src={image}
								alt="user"
								style={{
									width: 35,
									height: 35,
									borderRadius: "100%",
								}}
							/>
						</div>
						<div className="d-flex flex-column justify-content-center align-items-start">
							<div className="feed-item-header-2">
								<span className="font-weight-bolder text-capitalize">
									{this.props.post.author.firstName +
										" " +
										this.props.post.author.lastName}
								</span>{" "}
								&#8226;{" "}
								<span className="text-secondary">
									{moment(this.props.post.updatedAt).format(
										"DD MMMM yyyy"
									)}
								</span>
							</div>
							<div className="feed-item-header-2 text-secondary">
								Studied at National Institute of Technology,
								Warangal (Graduated 2019)
							</div>
						</div>
					</div>
					<div>
						<h6 className="font-weight-bolder text-dark">
							{this.props.post.question} ({" "}
							{
								<a
									className="font-14"
									href={this.props.post.contextLink}
								>
									Context Link
								</a>
							}{" "}
							)
						</h6>
					</div>
					<div className="feed-item-content mb-3">
						<div>
							{htmlReactParser(
								this.props.post.popularAnswer
									? this.props.post.popularAnswer
											.answerContent
									: "<p>No Answers Yet</p>"
							)}
						</div>
					</div>
					<div
						className="mb-2 text-secondary"
						style={{ fontSize: 12 }}
					>
						<span>
							{this.props.post.popularAnswer
								? this.props.post.popularAnswer.views.length
								: 0}{" "}
							views
						</span>{" "}
						&#8226; <span>View Upvoters</span> &#8226;{" "}
						<span>View Sharers</span>
					</div>
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
						likedByUser={this.props.post.popularAnswer.likedByUser}
						dislikedByUser={
							this.props.post.popularAnswer.dislikedByUser
						}
					/>
				</div>
				<div id={`POST-${this.props.post.postId}`} className="collapse">
					<NewComment />
					<Comments />
				</div>
			</div>
		);
	}
}
export default HomeSingleFeed;
