import React from 'react';
import '../../assets/css/notification.scss'
import { NotificationFilters } from '..';
class Notification extends React.Component
{
    render()
    {
        return(
            <div className="bg-white w-100">
            <div className="notification-container container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
                        <NotificationFilters/>
					</div>
					<div className="col-lg-7 col-md-9 col-sm-12">
                        <div className="d-flex flex-row justify-content-between align-items-center text-black-50 py-2">
                            <div className="head-notif">Notifications</div>
                            <div className="head-notif-set">Settings</div>
                        </div>
                        <hr className="mt-0"/>
                        <div className="notification-item">

                        </div>
					</div>
				</div>
			</div>
            </div>
        );
    }
}
export default Notification;