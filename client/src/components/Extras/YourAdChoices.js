import React from "react";

class YourAdChoices extends React.Component {
	render() {
		return (
			<div className="default-padding-top container bg-white">
				<div className="row">
					<div className="col-md-6 offset-md-3 font-16">
						<h2 className="my-4 text-center">
							Your Ad Choices – Quora Advertising Preferences
						</h2>
						<p>
							As described in our Privacy Policy, we may display
							interest-based advertising to you based on
							information that we have collected via the Quora
							Platform, and through our Pixels, widgets, and
							buttons embedded on third-party sites that you may
							have visited over time. See Quora’s Pixel Privacy
							Terms for more information about how our Pixels are
							used.
						</p>
						<p>
							<b>Pixels.</b> To opt out of tracking via the Quora
							Pixels, please visit this page. Opting out of Pixels
							tracking may impact our ability to personalize ads
							and content tailored to your interests. This setting
							is tied to your cookies, and, unless you are logged
							in to the Quora Platform, will only be effective on
							the browser for which you have performed the opt-out
						</p>
						<p>
							<b>Third-Party Ad Networks</b>
							<p>
								For information about and to opt out of
								interest-based ads from many third party ad
								networks, go to:
							</p>
						</p>
						<p>
							<ul>
								<li>
									U.S.
									<ul>
										<li>
											Digital Advertising Alliance’s
											Consumer Choice Page
										</li>
										<li>
											Network Advertising Initiative
											Consumer Opt-Out
										</li>
									</ul>
								</li>
								<li>
									Canada: Digital Advertising Alliance of
									Canada’s Opt-Out Tool
								</li>
								<li>
									European Union: European Interactive Digital
									Advertising Alliance
								</li>
							</ul>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default YourAdChoices;
