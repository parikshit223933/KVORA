import React from "react";
import { KnowsAboutReusable, ViewMoreButton } from "../../";

class KnowsAbout extends React.Component {
	render() {
		return (
			<div className="mb-3">
				<div className="font-16">
					<b>Knows About</b>
				</div>
				<hr className="my-2" />
				<div>
					<KnowsAboutReusable />
					<KnowsAboutReusable />
					<KnowsAboutReusable />
					<KnowsAboutReusable />
					<KnowsAboutReusable />
				</div>
                <ViewMoreButton/>
			</div>
		);
	}
}
export default KnowsAbout;
