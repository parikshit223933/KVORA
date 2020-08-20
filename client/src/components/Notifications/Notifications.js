import React from "react";
import "../../assets/css/notification.scss";
import { NotificationFilters } from "..";
import image from "../../assets/images/signInBackground.png";

class Notification extends React.Component {
	render() {
		return (
			<div className="bg-white w-100">
				<div className="notification-container container">
					<div className="row">
						<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
							<NotificationFilters />
						</div>
						<div className="col-lg-7 col-md-9 col-sm-12">
							<div className="d-flex flex-row justify-content-between align-items-center text-black-50 py-2">
								<div className="head-notif">Notifications</div>
								<div className="head-notif-set">Settings</div>
							</div>
							<hr className="my-0" />
							<div className="notification-item px-2 py-3">
								<div className="d-flex flex-row justify-content-between align-items-start">
									<div className="d-flex flex-row justify-content-start align-items-start">
										<div>
											<img
												src={image}
												alt="user"
												style={{
													width: 35,
													height: 35,
													borderRadius: "100%",
													marginRight: 20
												}}
											/>
										</div>
										<div className="d-flex flex-column justify-content-start align-items-start">
											<div
												className="mb-1 text-secondary"
												style={{ fontSize: 13 }}
											>
												May 25
											</div>
											<h6 className="font-weight-bold">
												Has anyone had an experience
												with Bloody Marry?
											</h6>
											<div>
												Girish Patil upvoted your
												answer.
											</div>
										</div>
									</div>

									<div style={{ fontSize: 20 }}>
										<div className="btn-group dropleft">
											<div
												data-toggle="dropdown"
												aria-haspopup="true"
												aria-expanded="false"
											>
												<i className="fas fa-ellipsis-h"></i>
											</div>
											<div className="dropdown-menu few-notifications-menu px-2">
												<a href="/" className="p-1">
													See fewer notifications like
													this
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<hr className="my-0" />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Notification;
