import React from "react";

class NotificationFilter extends React.Component {
	render() {
		return (
			<div>
				<h6 className="pl-4">Filters</h6>
				<hr className="my-1" />
				<div className="d-flex flex-column justify-content-start align-items-start">
					<div className="py-1 px-4 pr-1 w-100 notification-left-active notification-left-flex-item">
						All Notifications
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Stories
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Questions
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Spaces
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Subscriptions
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Comments
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Upvotes
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Your Content
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Your Profile
					</div>
					<div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">
						Announcements
					</div>
				</div>
			</div>
		);
	}
}

export default NotificationFilter;
