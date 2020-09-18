import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from "react-router-dom";

class SignUp extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            captcha:''
        }
    }
	onCaptchaChange = (value) => {
		this.setState({
            captcha:value
        })
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
							/>
						</div>
					</div>
					<div className="form-row mt-2 mb-2">
						<ReCAPTCHA
							sitekey='6Le_or0ZAAAAALJSH7mN2nnsFfbEGStA2aaGovF3'
							onChange={this.onCaptchaChange}
						/>
					</div>
                    <div className="form-row text-secondary">
                    <small>By clicking "Sign Up" you indicate that you have read and agree to Kvora's Terms of Service and Privacy Policy.</small>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-end align-items-center">
                        <div className="mr-3">
                            <Link to="/auth/sign-in">
                                Cancel
                            </Link>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-sm btn-primary">
    						Submit
    					</button>
                        </div>
                    </div>
					
				</form>
			</React.Fragment>
		);
	}
}
export default SignUp;
