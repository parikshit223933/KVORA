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
							path: "/auth/sign-in",
							state: { from: rest.location },
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
