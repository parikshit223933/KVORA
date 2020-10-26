import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";
import { signUp } from "../../actions/auth";
import { connect } from "react-redux";
class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			captcha: "",
			formData: {},
		};
	}
	onCaptchaChange = (value) => {
		this.setState({
			captcha: value,
		});
	};
	handleSubmit = () => {
		if (!this.state.captcha) {
			console.error("Captcha not selected!");
			return;
		}
		if (
			!this.state.formData.firstName ||
			!this.state.formData.lastName ||
			!this.state.formData.email ||
			!this.state.formData.password
		) {
			console.error("One of the fields were empty!");
			return;
		}
		this.props.dispatch(signUp(
			this.state.formData.firstName,
			this.state.formData.lastName,
			this.state.formData.email,
			this.state.formData.password
		));
	};
	handleInputChange = (param, value) => {
		this.setState({
			...this.state,
			formData: {
				...this.state.formData,
				[param]: value,
			},
		});
	};
	render() {
		return (
			<React.Fragment>
				<small>
					<h6>Sign Up</h6>
				</small>
				<form>
					<div className="form-row">
						<div className="form-group col-sm-6">
							<small>
								<label
									htmlFor="firstName"
									className="mb-1 font-weight-bold text-secondary"
								>
									FIRST NAME
								</label>
							</small>
							<input
								type="text"
								className="form-control form-control-sm"
								id="firstName"
								onChange={(event) =>
									this.handleInputChange(
										"firstName",
										event.target.value
									)
								}
							/>
						</div>
						<div className="form-group col-sm-6">
							<small>
								<label
									htmlFor="lastName"
									className="mb-1 font-weight-bold text-secondary"
								>
									LAST NAME
								</label>
							</small>
							<input
								type="text"
								className="form-control form-control-sm"
								id="lastName"
								onChange={(event) =>
									this.handleInputChange(
										"lastName",
										event.target.value
									)
								}
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-sm-12">
							<small>
								<label
									htmlFor="email"
									className="mb-1 font-weight-bold text-secondary"
								>
									Email
								</label>
							</small>
							<input
								type="email"
								className="form-control form-control-sm"
								id="email"
								onChange={(event) =>
									this.handleInputChange(
										"email",
										event.target.value
									)
								}
							/>
						</div>
					</div>
					<div className="form-row">
						<div className="form-group col-sm-12">
							<small>
								<label
									htmlFor="password"
									className="mb-1 font-weight-bold text-secondary"
								>
									Password
								</label>
							</small>
							<input
								type="password"
								className="form-control form-control-sm"
								id="password"
								onChange={(event) =>
									this.handleInputChange(
										"password",
										event.target.value
									)
								}
							/>
						</div>
					</div>
					<div className="form-row mt-2 mb-2">
						<ReCAPTCHA
							sitekey="6Le_or0ZAAAAALJSH7mN2nnsFfbEGStA2aaGovF3"
							onChange={this.onCaptchaChange}
						/>
					</div>
					<div className="form-row text-secondary">
						<small>
							By clicking "Sign Up" you indicate that you have
							read and agree to Kvora's Terms of Service and
							Privacy Policy.
						</small>
					</div>
					<div className="form-group d-flex flex-row justify-content-end align-items-center">
						<div className="mr-3">
							<Link to="/auth/sign-in">Cancel</Link>
						</div>
						<div>
							<button
								type="button"
								onClick={this.handleSubmit}
								className="btn btn-sm btn-primary"
							>
								Submit
							</button>
						</div>
					</div>
				</form>
			</React.Fragment>
		);
	}
}
const mapStateToProps = ({ ...state }) => {
	return {
		auth: state.auth,
	};
};
export default connect(mapStateToProps)(SignUp);
