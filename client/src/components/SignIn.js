import React from "react";
import "../assets/css/signIn.css";

class SignIn extends React.Component {
	render() {
		return (
			<div className="signIn-component">
				<div className="row w-100 m-0">
					<div className="col-xl-6 pl-0 pr-0 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1 bg-white pt-4 sign-in-box">
						<p className="display-3 website-logo text-center m-0 pl-3 pr-3">
							Kvora
						</p>
						<p className="text-center text-secondary mb-5 pl-3 pr-3">
							A place to share knowledge and better understand the
							world
						</p>
						<div className="d-flex flex-row flex-wrap mb-4 pl-3 pr-3 justify-content-around align-items-start">
							<div className="flex-column justify-content-center align-items-center sign-in-left">
								<div>
									<button
										type="button"
										className="btn btn-primary"
									>
										<i
											className="fab fa-google mr-3"
											style={{ fontSize: "20px" }}
										></i>{" "}
										Continue with Google
									</button>
								</div>
								<div>
									<button
										type="button"
										className="btn btn-primary"
									>
										<i
											className="fab fa-facebook-square mr-1"
											style={{ fontSize: "20px" }}
										></i>{" "}
										Continue With Facebook
									</button>
								</div>
								<div style={{ width: "238px" }} className="m-0">
									<p className="text-secondary sign-up-desc">
										Sign Up With Email. By signing up you
										indicate that you have read and agree to
										Quora's Terms of Service and Privacy
										Policy.
									</p>
								</div>
							</div>
							<div
								className="horizontal-line"
								style={{
									display: "none",
									width: "70%",
									margin: "20px 0px",
									height: "1px",
									backgroundColor: "#dadada"
								}}
							></div>
							<div
								className="vertical-line"
								style={{
									width: "1px",
									height: "200px",
									backgroundColor: "#dadada"
								}}
							></div>
							<div className="sign-in-form">
								<h6>Login</h6>
								<form>
									<div className="form-group">
										<input
											type="email"
											className="form-control form-control-sm"
											aria-describedby="emailHelp"
											required
											placeholder="Email"
										/>
									</div>
									<div className="form-group">
										<input
											required
											type="password"
											className="form-control form-control-sm"
											placeholder="Password"
										/>
									</div>
									<div className="d-flex flex-row justify-content-between align-items-start">
                                        <div className="text-secondary small">
                                            Forgot Password?
                                        </div>
										<div>
											<button
												type="submit"
												className="btn btn-sm btn-primary"
											>
												Submit
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div>
							<div
								className="horizontal-line"
								style={{
									width: "100%",
									margin: "5px 0px",
									height: "1px",
									backgroundColor: "#dadada"
								}}
							></div>
							<div className="text-center text-secondary">
								<small>
									हिन्दी{" "}
									<i className="fas fa-chevron-right"></i>
								</small>
							</div>
						</div>
						<footer className="footer-sign-in-container small">
							<div className="p-1 w-100 text-secondary w-100 d-flex justify-content-around align-items-center flex-wrap">
								<div>About</div>
								<div>Languages</div>
								<div>Careers</div>
								<div>Business</div>
								<div>Privacy</div>
								<div>Terms</div>
								<div>Impressum</div>
								<div>Contact</div>
								<div>
									<i className="far fa-copyright"></i> Kvora
									Inc. 2020
								</div>
							</div>
						</footer>
					</div>
				</div>
			</div>
		);
	}
}
export default SignIn;
