import React from "react";
import "../assets/css/home.css";
import image from "../assets/images/signInBackground.png";

class Home extends React.Component {
	render() {
		return (
			<div className="home-component">
				<div className="navbar-container bg-white">
					<nav className="navbar pt-0 px-0 pb-0 navbar-expand-lg navbar-light bg-white container">
						<a
							className="navbar-brand website-logo"
							href="#"
							style={{ fontSize: "35px" }}
						>
							Kvora
						</a>
						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarSupportedContent"
							aria-controls="navbarSupportedContent"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div
							className="collapse navbar-collapse"
							id="navbarSupportedContent"
						>
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link text-secondary" href="#">
                                    <b><i className="fas nav-link-icon fa-home"></i> Home</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link text-secondary" href="#">
                                    <b><i className="far nav-link-icon fa-edit"></i> Answer</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link text-secondary" href="#">
                                    <b><i className="fas nav-link-icon fa-users"></i> Spaces</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link text-secondary" href="#">
                                    <b><i className="far nav-link-icon fa-bell"></i>{" "}
										Notifications</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
							</ul>
							<form className="form-inline my-2 my-lg-0">
								<input
									className="form-control mr-sm-2"
									type="search"
									placeholder="Search"
									aria-label="Search"
								/>
							</form>
							<div
								className="user-image-round"
								style={{
									backgroundImage: `url("${image}")`
								}}
							></div>
                            <div className="ml-3 mr-3">
                                <i className="fas fa-globe"></i>
                            </div>
                            <div className="add-question-button">
                                <button type="button" className="btn btn-danger"><b>Add Question</b></button>
                            </div>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
export default Home;
