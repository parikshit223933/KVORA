import React from 'react';
import image from "../assets/images/signInBackground.png";
import "../assets/css/navbar.css";

class Navbar extends React.Component
{
    render()
    {
        return(
            <div className="navbar-container bg-white">
					<nav className="navbar pt-0 pb-0 navbar-expand-lg navbar-light bg-white container">
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
							<ul className="navbar-nav mr-auto d-md-flex flex-row justify-content-between align-items-center">
								<li className="nav-item active">
									<a
										className="nav-link text-secondary"
										href="#"
									>
										<i className="fas nav-link-icon fa-home"></i>{" "}
										<b>Home</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-secondary"
										href="#"
									>
										<i className="far nav-link-icon fa-edit"></i>{" "}
										<b>Answer</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-secondary"
										href="#"
									>
										<i className="fas nav-link-icon fa-users"></i>{" "}
										<b>Spaces</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link text-secondary"
										href="#"
									>
										<i className="far nav-link-icon fa-bell"></i>{" "}
										<b>Notifications</b>{" "}
										<span className="sr-only">
											(current)
										</span>
									</a>
								</li>
							</ul>
                            <hr className="horizontal-line"/>
                            <form className="form-inline my-2 my-lg-0">
    								<input
    									className="form-control mr-lg-2 mx-auto navbar-search-input"
    									type="search"
    									placeholder="Search"
    									aria-label="Search"
    								/>
    							</form>
                                <hr className="horizontal-line"/>
							<div className="d-flex flex-row justify-content-between align-items-center  pb-4 pb-lg-0">
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
    								<button
    									type="button"
    									className="btn btn-danger"
    								>
    									<b>Add Question</b>
    								</button>
    							</div>
							</div>
						</div>
					</nav>
				</div>
        )
    }
}
export default Navbar;