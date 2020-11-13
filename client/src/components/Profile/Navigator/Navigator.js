import React from "react";
import {
	NavProfile,
	NavActivity,
	NavAnswers,
	NavEdits,
	NavFollowers,
	NavFollowing,
	NavPosts,
	NavQuestions,
	NavShares,
	ComponentLoader,
} from "../../";
import { Route } from "react-router-dom";

class Navigator extends React.Component {
	render() {
		if (this.props.session.inProgress) {
			return <ComponentLoader />;
		}
		return (
			<React.Fragment>
				<Route
					exact
					path={`${this.props.match.url}`}
					render={(props) => (
						<NavProfile
							{...props}
							posts={this.props.session.posts}
						/>
					)}
				/>
				<Route
					exact
					path={`${this.props.match.url}/activity`}
					component={NavActivity}
				/>
				<Route
					exact
					path={`${this.props.match.url}/answers`}
					render={(props) => (
						<NavAnswers
							{...props}
							posts={this.props.session.posts}
						/>
					)}
				/>
				<Route
					exact
					path={`${this.props.match.url}/edits`}
					component={NavEdits}
				/>
				<Route
					exact
					path={`${this.props.match.url}/followers`}
					component={NavFollowers}
				/>
				<Route
					exact
					path={`${this.props.match.url}/following`}
					component={NavFollowing}
				/>
				<Route
					exact
					path={`${this.props.match.url}/posts`}
					component={NavPosts}
				/>
				<Route
					exact
					path={`${this.props.match.url}/questions`}
					component={NavQuestions}
				/>
				<Route
					exact
					path={`${this.props.match.url}/shares`}
					component={NavShares}
				/>
			</React.Fragment>
		);
	}
}
export default Navigator;
