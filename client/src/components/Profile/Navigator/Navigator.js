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
	NavShares
} from "../../";
import { Route } from "react-router-dom";

class Navigator extends React.Component {
	render() {
		return (
			<React.Fragment>
				<Route
					exact
					path={`${this.props.match.url}`}
					component={NavProfile}
				/>
				<Route
					exact
					path={`${this.props.match.url}/activity`}
					component={NavActivity}
				/>
				<Route
					exact
					path={`${this.props.match.url}/answers`}
					component={NavAnswers}
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
