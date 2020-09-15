import React from "react";
import "../../assets/css/stats.scss";
import { StatHeader, StatQuestionsList, StatRight } from "../";

class Statistics extends React.Component {
	render() {
		return (
			<div className="container default-padding-top bg-white">
				<StatHeader/>
				<div className="row custom-reverse-flex">
					<StatQuestionsList/>
					<StatRight/>
				</div>
			</div>
		);
	}
}
export default Statistics;
