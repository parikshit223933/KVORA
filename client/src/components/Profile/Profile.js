import React from "react";
import "../../assets/css/profile.scss";
import image from "../../assets/images/signInBackground.png";
import { Link } from "react-router-dom";
import {
	Navigator,
	CredentialsAndHighlights,
	ProfileSpaces,
	KnowsAbout,
	ComponentLoader,
} from "../";
import { refreshPostsData } from "../../actions/session";
import { connect } from "react-redux";

class Profile extends React.Component {
	componentDidMount() {
		this.props.dispatch(refreshPostsData());
	}
	render() {
		if (this.props.auth.inProgress) {
			return <ComponentLoader />;
		}
		return (
			<div className="container profile-component bg-white">
				<div className="row">
					<div className="col-md-8">
						<header>
							<div className="d-flex flex-row justify-content-start align-items-center">
								<div className="ml-0 my-3 mr-3">
									<img
										src={image}
										alt="user"
										style={{
											width: 110,
											height: 110,
											borderRadius: "100%",
										}}
									/>
								</div>
								<div className="d-flex flex-column justify-content-center align-items-start">
									<h4 className="mb-1">
										<b>
											{this.props.auth.user.firstName +
												" " +
												this.props.auth.user.lastName}
										</b>{" "}
										<small
											style={{ fontSize: 12 }}
											className="text-secondary"
										>
											Edit
										</small>
									</h4>
									<p style={{ fontSize: 18 }} className="m-0">
										MERN Stack Web Developer | Machine
										Learning Enthusiast
									</p>
									<small className="text-secondary">
										Edit
									</small>
								</div>
							</div>
							<div className="text-black-50 font-13">
								<div>Write a description about yourself</div>
								<div>4 Followers</div>
							</div>
						</header>
						<hr className="mb-0" />
						<div className="d-flex flex-row text-black-50 profile-nav font-weight-bolder font-13 px-2 justify-content-start align-items-center flex-wrap">
							<Link
								to={`${this.props.match.url}`}
								className="py-3 px-2 ghost-link"
							>
								Profile
							</Link>
							<Link
								to={`${this.props.match.url}/answers`}
								className="py-3 px-2 ghost-link"
							>
								5 Answers
							</Link>
							<Link
								to={`${this.props.match.url}/questions`}
								className="py-3 px-2 ghost-link"
							>
								0 Questions
							</Link>
							<Link
								to={`${this.props.match.url}/shares`}
								className="py-3 px-2 ghost-link"
							>
								0 Shares
							</Link>
							<Link
								to={`${this.props.match.url}/posts`}
								className="py-3 px-2 ghost-link"
							>
								0 Posts
							</Link>
							<Link
								to={`${this.props.match.url}/followers`}
								className="py-3 px-2 ghost-link"
							>
								4 Followers
							</Link>
							<Link
								to={`${this.props.match.url}/following`}
								className="py-3 px-2 ghost-link"
							>
								7 Following
							</Link>
							<div className="py-3 px-2 ghost-link dropdown">
								<div
									id="dropdown-more"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									More <i className="fas fa-chevron-down"></i>
								</div>
								<div
									className="dropdown-menu text-black-50"
									aria-labelledby="dropdown-more"
								>
									<Link
										to={`${this.props.match.url}/edits`}
										className="dropdown-item"
									>
										Edits
									</Link>
									<Link
										to={`${this.props.match.url}/activity`}
										className="dropdown-item"
									>
										Activity
									</Link>
								</div>
							</div>
						</div>
						<hr className="mt-0 mb-0" />
						<div className="d-flex flex-row justify-content-between align-items-center">
							<div className="px-2 py-3 text-dark font-weight-bolder text-capitalize">
								{this.props.location.pathname.split("/")[3] ||
									"profile"}
							</div>
							<div className="px-2 dropleft py-3 text-secondary font-weight-bolder ">
								<div
									className="cursor-pointer"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Most Recent{" "}
									<i className="fas fa-chevron-down"></i>
								</div>
								<div className="dropdown-menu">
									<a className="dropdown-item" href="/">
										Most Recent
									</a>
									<a className="dropdown-item" href="/">
										All-Time Views
									</a>
								</div>
							</div>
						</div>
						<hr className="mt-0" />
						<div>
							<Navigator
								match={this.props.match}
								session={this.props.session}
								auth={this.props.auth}
							/>
						</div>
					</div>
					<div className="col-md-4 d-none d-md-block">
						<CredentialsAndHighlights />
						<ProfileSpaces />
						<KnowsAbout />
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ ...state }) => {
	return {
		session: state.session,
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(Profile);
