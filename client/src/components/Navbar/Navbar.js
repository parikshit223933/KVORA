import React from "react";
import image from "../../assets/images/signInBackground.png";
import "../../assets/css/navbar.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { GlobeDropDown, ProfilePictureDropDown } from "..";

class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar-container fixed-top bg-white">
				<nav className="navbar pt-0 pb-0 navbar-expand-lg navbar-light bg-white container">
					<Link
						className="navbar-brand website-logo"
						to="/"
						style={{ fontSize: "26px" }}
					>
						Kvora
					</Link>
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
						<ul className="navbar-nav mr-auto d-md-flex flex-row justify-content-between align-items-center">
							<li className="nav-item-hover nav-active">
								<Link
									to="/"
									className="nav-link nav-link-custom-properties text-secondary"
								>
									<i className="fas nav-link-icon fa-home"></i>{" "}
									<b>Home</b>{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item-hover">
								<Link
									to="/answer"
									className="nav-link nav-link-custom-properties text-secondary"
								>
									<i className="far nav-link-icon fa-edit"></i>{" "}
									<b>Answer</b>{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item-hover dropdown">
								<a
									className="nav-link nav-link-custom-properties text-secondary"
									id="navbarDropdown"
									href="/"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<i className="fas nav-link-icon fa-users"></i>{" "}
									<b>Spaces</b>{" "}
									<span className="sr-only">(current)</span>
								</a>
								<div
									className="dropdown-menu position-absolute"
									style={{
										left: "-60px",
										fontSize: 14,
										backgroundColor: "#f7f7f8"
									}}
									aria-labelledby="navbarDropdown"
								>
									<Link
                                        to="/all-spaces"
										className="dropdown-item font-weight-bolder text-secondary"
									>
										See All Spaces{" "}
										<i className="fas fa-chevron-right"></i>
									</Link>
									<a
										className="dropdown-item text-secondary d-md-none"
										href="/"
									>
										Action
									</a>
									<a
										className="dropdown-item text-secondary d-md-none"
										href="/"
									>
										Action
									</a>
									<a
										className="dropdown-item text-secondary d-md-none"
										href="/"
									>
										Action
									</a>
									<a
										className="dropdown-item text-secondary d-md-none"
										href="/"
									>
										Action
									</a>
								</div>
							</li>
							<li className="nav-item-hover">
								<Link
									to="/notification"
									className="nav-link nav-link-custom-properties text-secondary"
								>
									<i className="far nav-link-icon fa-bell"></i>{" "}
									<b>Notifications</b>{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
						</ul>
						<hr className="horizontal-line" />
						<form className="form-inline search-bar-container my-2 my-lg-0">
							<input
								className="form-control mr-lg-2 mx-auto navbar-search-input searchBar-nav"
								type="search"
								placeholder="Search"
								aria-label="Search"
							/>
							<div className="search-ico">
								<i className="fas fa-search"></i>
							</div>
						</form>
						<hr className="horizontal-line" />
						<div className="d-flex flex-row justify-content-between align-items-center  pb-4 pb-lg-0">
							<div className="position-relative">
								<div
									style={{ height: 50 }}
									className="navbar-icon-container d-flex flex-row justify-content-center align-items-center px-1"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<div
										className="user-image-round"
										style={{
											backgroundImage: `url("${image}")`
										}}
									></div>
								</div>
								<ProfilePictureDropDown />
							</div>
							<div
								style={{ height: 50 }}
								className="navbar-icon-container d-flex flex-row position-relative justify-content-center align-items-center px-1"
							>
								<div
									className="ml-2 mr-2"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<i className="fas fa-globe"></i>
								</div>
								<GlobeDropDown />
							</div>
							<div className="add-question-button">
								<button
									type="button"
									className="btn btn-danger"
									data-toggle="modal"
									data-target="#newPost"
								>
									<b>Add Question</b>
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
export default Navbar;
