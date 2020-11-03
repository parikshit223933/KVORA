import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { ScreenLoader } from "..";

class RestrictedRoute extends React.Component {
	render() {
		const { component: Component, path, ...rest } = this.props;
		if (this.props.auth.inProgress) {
			return <ScreenLoader />;
		}
		if (this.props.auth.isLoggedIn) {
			return <Redirect to="/" />;
		} else {
			return <Route {...rest} component={Component} path={path} />;
		}
	}
}
const mapStateToProps = ({ ...state }) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(RestrictedRoute);
