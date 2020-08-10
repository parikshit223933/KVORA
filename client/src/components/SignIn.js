import React from "react";
import "../assets/css/signIn.css";

class SignIn extends React.Component {
	render() {
		return (
			<div className="signIn-component">
				<div className="row w-100 sign-in-box m-0">
					<div className="col-md-8 offset-md-2 bg-white pt-4">
						<p className="display-3 website-logo text-center m-0">
							Kvora
						</p>
						<p className="text-center text-secondary mb-5">
							A place to share knowledge and better understand the
							world
						</p>
						<div className="d-flex flex-row flex-wrap mb-4 justify-content-around align-items-center">
							<div className="flex-column justify-content-center align-items-center sign-in-left">
								<div>
									<button
										type="button"
										className="btn btn-primary"
									>
										Primary
									</button>
								</div>
                                <div>
									<button
										type="button"
										className="btn btn-primary"
									>
										Primary
									</button>
								</div>
                                <div>
                                </div>
							</div>
							<div style={{width:'1px', height:'200px', backgroundColor:'#dadada'}}></div>
							<div></div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default SignIn;
