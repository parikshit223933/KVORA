import React from "react";
import { Link } from "react-router-dom";
import {SettingsRouter} from '../'

class Settings extends React.Component {
	render() {
		return (
			<div className="container bg-white" style={{ paddingTop: 100 }}>
				<div className="row">
					<div className="col-md-3 border-black">
						<p className="pl-3 pr-1">
							<b>Settings</b>
						</p>
						<hr />
						<div className="pl-2 pr-1 d-flex flex-column align-items-start justify-content-start">
							<Link
								to="/settings/"
								className="py-2 px-2 w-100 ghost-link"
							>
								Account
							</Link>
							<Link
								to="/settings/privacy"
								className="py-2 px-2 w-100 ghost-link"
							>
								Privacy
							</Link>
							<Link
								to="/settings/email-and-notifications"
								className="py-2 px-2 w-100 ghost-link"
							>
								Email & Notifications
							</Link>
							<Link
								to="/settings/languages"
								className="py-2 px-2 w-100 ghost-link"
							>
								Languages
							</Link>
						</div>
					</div>
					<div className="col-md-9 border-black">
                        <SettingsRouter match={this.props.match}/>
                    </div>
				</div>
			</div>
		);
	}
}
export default Settings;
