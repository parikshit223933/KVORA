import React from "react";
import image from "../../assets/images/signInBackground.png";
import "../../assets/css/navbar.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import * as $ from "jquery";

class Navbar extends React.Component {
	componentDidMount() {
		this.changeColorEventListener();
	}
	changeColorEventListener = () => {
		$(".nav-item").click(function () {
			$(".nav-item").removeClass("nav-active");
			$(this).addClass("nav-active");
		});
	};
	render() {
		return (
			<div className="navbar-container fixed-top bg-white">
				<nav className="navbar pt-0 pb-0 navbar-expand-lg navbar-light bg-white container">
					<a
						className="navbar-brand website-logo"
						href="/"
						style={{ fontSize: "26px" }}
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
						<ul className="navbar-nav mr-auto d-md-flex flex-row justify-content-between align-items-center">
							<li className="nav-item nav-active">
								<Link
									to="/"
									className="nav-link nav-link-custom-properties text-secondary"
								>
									<i className="fas nav-link-icon fa-home"></i>{" "}
									<b>Home</b>{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item">
								<Link
									to="/answer"
									className="nav-link nav-link-custom-properties text-secondary"
								>
									<i className="far nav-link-icon fa-edit"></i>{" "}
									<b>Answer</b>{" "}
									<span className="sr-only">(current)</span>
								</Link>
							</li>
							<li className="nav-item dropdown">
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
									<a
										className="dropdown-item font-weight-bolder text-secondary"
										href="/"
									>
										See All Spaces{" "}
										<i className="fas fa-chevron-right"></i>
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
									<a
										className="dropdown-item text-secondary d-md-none"
										href="/"
									>
										Action
									</a>
								</div>
							</li>
							<li className="nav-item">
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
							<div className="navbar-icon-container d-flex flex-row justify-content-center align-items-center px-1">
								<div
									className="user-image-round"
									style={{
										backgroundImage: `url("${image}")`
									}}
								></div>
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
								<div
									className="dropdown-menu"
									style={{ width: 230 }}
									aria-labelledby="dropdownMenuButton"
								>
									<div className="pl-3 text-secondary">
										<b style={{ fontSize: 15 }}>
											Languages
										</b>
									</div>
									<hr className="my-2" />
									<a
										className="py-2 dropdown-item d-flex w-100 flex-row justify-content-between align-items-center px-3"
										href="/"
										style={{ width: "max-content" }}
									>
										<div className="d-flex flex-row justify-content-between align-items-center">
											<div className="circular-badge">
												EN
											</div>
											<div className="mr-5 font-weight-bold text-black-50" style={{fontSize:15}}>English</div>
										</div>
										<div className="tick-mark">
											<i className="far fa-check-circle"></i>
										</div>
									</a>
									<a
										className="py-2 dropdown-item d-flex w-100 flex-row justify-content-between align-items-center px-3"
										href="/"
										style={{ width: "max-content" }}
									>
										<div className="d-flex flex-row justify-content-between align-items-center">
											<div
												className="circular-badge"
												style={{
													backgroundColor: "#00a34b"
												}}
											>
												HI
											</div>
											<div className="mr-5 font-weight-bold text-black-50" style={{fontSize:15}}>Hindi</div>
										</div>
										<div className="tick-mark" style={{color:'#b92b27'}}>
                                        <i className="fas fa-exclamation-circle"></i>
										</div>
									</a>
                                    <hr className="my-2" />
                                    <a className="dropdown-item font-weight-bold text-black-50 pl-3" style={{fontSize:12}}>
                                        Add Language
                                    </a>
                                    <a className="dropdown-item font-weight-bold text-black-50 pl-3" style={{fontSize:12}}>
                                        See all languages
                                    </a>
								</div>
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
