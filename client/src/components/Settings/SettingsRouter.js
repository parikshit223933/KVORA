import React from "react";
import { Route } from "react-router-dom";
import {
	PrivacySettings,
	Languages,
	EmailAndNotifications,
	Account,
} from "../";

class SettingsRouter extends React.Component {
	render() {
		console.log(this.props.match.path);
		return (
			<React.Fragment>
				<Route
                exact
					path={`${this.props.match.path}/`}
					component={Account}
				/>
				<Route
					exact
					path={`${this.props.match.path}/privacy/`}
					component={PrivacySettings}
				/>
				<Route
					exact
					path={`${this.props.match.path}/languages/`}
					component={Languages}
				/>
				<Route
					exact
					path={`${this.props.match.path}/email-and-notifications/`}
					component={EmailAndNotifications}
				/>
			</React.Fragment>
		);
	}
}
export default SettingsRouter;
