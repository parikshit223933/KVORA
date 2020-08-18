import React from 'react';
import '../../assets/css/notification.css'
class Notification extends React.Component
{
    render()
    {
        return(
            <div className="notification-container container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
					</div>
					<div className="col-lg-7 col-md-9 col-sm-12">
					</div>
					<div className="col-lg-3 d-lg-block d-none">
					</div>
					{/* hidden below medium screen */}
				</div>
			</div>
        );
    }
}
export default Notification;