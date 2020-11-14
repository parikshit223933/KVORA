import React from "react";
import { connect } from "react-redux";
import { downvoteAnswer, upvoteAnswer } from "../../actions/session";
import ComponentLoader from "../Loaders/ComponentLoader";
import liked from "../../assets/icons/like.svg";
import unliked from "../../assets/icons/unlike.svg";
import broken from "../../assets/icons/broken.svg";
import unbroken from "../../assets/icons/unbroken.svg";

class FeedActions extends React.Component {
	likeHandler = () => {
		if (this.props.answerId)
			this.props.dispatch(upvoteAnswer(this.props.answerId));
		else console.log("This Question is not answered yet!");
	};
	dislikeHandler = () => {
		if (this.props.answerId)
			this.props.dispatch(downvoteAnswer(this.props.answerId));
		else console.log("This Question is not answered yet!");
	};
	render() {
		if (this.props.session.inProgress) {
			return <ComponentLoader />;
		}
		return (
			<div className="feed-item-footer d-flex flex-row justify-content-between align-items-center text-secondary">
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="mr-3">
						<span
							onClick={this.likeHandler}
							style={{ cursor: "pointer" }}
						>
							{this.props.likedByUser ? (
								<img src={liked} alt="liked" width={17} />
							) : (
								<img width={17} src={unliked} alt="liked" />
							)}
						</span>{" "}
						<span>{this.props.upvotes.length}</span>
					</div>
					<div className="mr-3">
						<span>
							<i className="fas fa-sync-alt"></i>
						</span>{" "}
						<span>{this.props.shares.length}</span>
					</div>
					<div
						className="mr-3"
						data-toggle="collapse"
						data-target={`#POST-${this.props.postId}`}
						aria-expanded={false}
						aria-controls={`POST-${this.props.postId}`}
					>
						<span>
							<i className="far fa-comment"></i>
						</span>{" "}
						<span>{this.props.comments.length}</span>
					</div>
				</div>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="mr-3">
						<span
							onClick={this.dislikeHandler}
							style={{ cursor: "pointer" }}
						>
							{this.props.dislikedByUser ? (
								<img src={broken} alt="liked" width={19} />
							) : (
								<img width={19} src={unbroken} alt="liked" />
							)}
						</span>
					</div>
					<div className="mr-3">
						<span>
							<i className="fas fa-share"></i>
						</span>
					</div>
					<div className="mr-3">
						<span
							className="cursor-pointer"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							<i className="fas fa-ellipsis-h"></i>
						</span>

						<div className="dropdown-menu text-black-50">
							<a className="dropdown-item" href="/">
								Pin to Profile
							</a>
							<a className="dropdown-item" href="/">
								Translate Answer
							</a>
							<a className="dropdown-item" href="/">
								Bookmark
							</a>
							<a className="dropdown-item" href="/">
								Not For Reproduction
							</a>
							<a className="dropdown-item" href="/">
								Not For Translation
							</a>
							<a className="dropdown-item" href="/">
								Disable Comments
							</a>
							<a className="dropdown-item" href="/">
								Edit Answer
							</a>
							<a className="dropdown-item" href="/">
								Edit Credential
							</a>
							<a className="dropdown-item" href="/">
								Downvate Question
							</a>
							<a className="dropdown-item" href="/">
								Log
							</a>
							<a className="dropdown-item" href="/">
								Delete Answer
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
const mapStatetoProps = ({ session }) => {
	return {
		session: session,
	};
};
export default connect(mapStatetoProps)(FeedActions);
