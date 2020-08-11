import React from "react";
import { Link } from "react-router-dom";
class SocialLogin extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div>
					<button type="button" className="btn btn-primary">
						<i
							className="fab fa-google mr-3"
							style={{ fontSize: "20px" }}
						></i>{" "}
						Continue with Google
					</button>
				</div>
				<div>
					<button type="button" className="btn btn-primary">
						<i
							className="fab fa-facebook-square mr-1"
							style={{ fontSize: "20px" }}
						></i>{" "}
						Continue With Facebook
					</button>
				</div>
				<div style={{ width: "238px" }} className="m-0">
					<p className="text-secondary sign-up-desc">
						<Link to="/auth/sign-up">Sign Up</Link> With Email. By
						signing up you indicate that you have read and agree to
						Quora's Terms of Service and Privacy Policy.
					</p>
				</div>
			</React.Fragment>
		);
	}
}
export default SocialLogin;
