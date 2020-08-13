import React from "react";
import "../assets/css/home.css";
import { HomeSpaces } from "./";

class Home extends React.Component {
	render() {
		return (
			<div className="home-component container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
						{/* hidden below large screen */}
						<HomeSpaces />
					</div>
					<div className="bg-white col-lg-7 col-md-9 col-sm-12">
						sdf
					</div>
					<div className="col-lg-3 d-lg-block d-none">sdf</div>
					{/* hidden below medium screen */}
				</div>
			</div>
		);
	}
}
export default Home;
