import React from "react";

class PrivacySettings extends React.Component {
	render() {
		return (
			<div className="px-2">
				<div className="mb-4">
					<div>
						<b>Privacy Settings</b>
					</div>
					<hr className="my-2" />
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow search engines to index your name.{" "}
							<span className="text-secondary">Learn more</span>
						</label>
					</div>
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow adult content in your feed.{" "}
							<span className="text-secondary">Learn more</span>
						</label>
					</div>
				</div>

				<div className="mb-4">
					<div>
						<b>Inbox Preferences</b>
					</div>
					<hr className="my-2" />
					<p>
						Which registered users would you like to receive
						messages from?
					</p>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios1"
							value="option1"
							checked
						/>
						<label
							className="form-check-label"
							for="exampleRadios1"
						>
							Allow any person on Kvora to send me messages.
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
						/>
						<label
							className="form-check-label"
							for="exampleRadios2"
						>
							Allow any person on Kvora I follow or
							admin/moderator of a space I follow to send me
							messages.
						</label>
					</div>
					<div className="form-check">
						<input
							className="form-check-input"
							type="radio"
							name="exampleRadios"
							id="exampleRadios2"
							value="option2"
						/>
						<label
							className="form-check-label"
							for="exampleRadios2"
						>
							Allow no one to send me messages.
						</label>
					</div>
				</div>

				<div className="mb-4">
					<div>
						<b>Comment Preferences</b>
					</div>
					<hr className="my-2" />
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow other people to comment on your answers.
						</label>
					</div>
				</div>

				<div className="mb-4">
					<div>
						<b>Translation Preferences</b>
					</div>
					<hr className="my-2" />
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow other people to translate your answers into
							other languages.
						</label>
					</div>
				</div>

				<div className="mb-4">
					<div>
						<b>Content Preferences</b>
					</div>
					<hr className="my-2" />
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow GIFs to autoplay.
						</label>
					</div>
					<div className="form-group form-check">
						<input
							type="checkbox"
							className="form-check-input"
							id="exampleCheck1"
						/>
						<label className="form-check-label" for="exampleCheck1">
							Allow advertisers on Kvora to promote your answers.
						</label>
					</div>
				</div>
				<div className="mb-4">
					<div>
						<b>Delete or Deactivate Your Account</b>
					</div>
					<hr className="my-2" />
					<div>Deactivate Account in All Languages</div>
					<hr className="my-2" />
					<div>Delete Account</div>
				</div>
			</div>
		);
	}
}
export default PrivacySettings;
