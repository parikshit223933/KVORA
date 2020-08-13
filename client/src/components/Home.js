import React from "react";
import "../assets/css/home.css";
import {Navbar} from './';

class Home extends React.Component {
	render() {
		return (
			<div className="home-component">
				<Navbar/>
			</div>
		);
	}
}
export default Home;
