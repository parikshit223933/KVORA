import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ScreenLoader } from "..";

class PrivateRoute extends React.Component {
	render() {
		const { component: Component, path, auth, ...rest } = this.props;
		if (auth.inProgress) {
			return <ScreenLoader />;
		} else {
			if (auth.isLoggedIn) {
				return <Route {...rest} path={path} component={Component} />;
			} else {
				return (
					<Redirect
						to={{
							pathname: "/auth/sign-in",
							state: {
								referrer: rest.location.pathname,
							},
						}}
					/>
				);
			}
		}
	}
}
const mapStateToProps = ({ ...state }) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(PrivateRoute);
