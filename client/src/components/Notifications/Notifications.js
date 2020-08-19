import React from 'react';
import '../../assets/css/notification.css'
class Notification extends React.Component
{
    render()
    {
        return(
            <div className="bg-white w-100">
            <div className="notification-container container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
                        <div>
                            <h6 className="pl-4">Filters</h6>
                            <hr className="my-1" />
                            <div className="d-flex flex-column justify-content-start align-items-start">
                                <div className="py-1 px-4 pr-1 w-100 notification-left-active notification-left-flex-item">All Notifications</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Stories</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Questions</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Spaces</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Subscriptions</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Comments</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Upvotes</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Your Content</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Your Profile</div>
                                <div className="py-1 px-4 pr-1 w-100 notification-left-flex-item">Announcements</div>
                            </div>
                        </div>
					</div>
					<div className="col-lg-7 col-md-9 col-sm-12">
                        <div className="d-flex flex-row justify-content-between align-items-center py-2">
                            <b>Notifications</b>
                            <div>Settings</div>
                        </div>
					</div>
                    {
                    /* 
                        ! Warning: Will not be using this 
                     */
                    }
					<div className="col-lg-3 d-lg-block d-none">
					</div>
					{/* hidden below medium screen */}
				</div>
			</div>
            </div>
        );
    }
}
export default Notification;