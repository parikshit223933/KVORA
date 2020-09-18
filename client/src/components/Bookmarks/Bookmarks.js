import React from "react";
import { HomeSingleFeed, HomeSpaces } from "../";

class Bookmarks extends React.Component {
	render() {
		return (
			<div className="home-component container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
						{/* hidden below large screen */}
						<HomeSpaces />
					</div>
					<div className="col-lg-7 col-md-9 col-sm-12">
						<div>
							<b>Bookmarks</b>
						</div>
						<hr className="my-3" />
						<div>
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
							<HomeSingleFeed />
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Bookmarks;
