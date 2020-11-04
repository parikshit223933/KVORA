import React from "react";
import "../../assets/css/home.scss";
import { HomeSpaces, HomeFeed, HomeFeedImprove, ComponentLoader } from "..";
import {
	refreshNotificationData,
	refreshPostsData,
} from "../../actions/session";
import { connect } from "react-redux";

class Home extends React.Component {
	componentDidMount()
	{
		this.props.dispatch(refreshNotificationData());
		this.props.dispatch(refreshPostsData());
	}
	render() {
		if(this.props.session.inProgress)
		{
			return <ComponentLoader/>
		}
		return (
			<div className="home-component container">
				<div className="row">
					<div className="col-lg-2 px-0 col-md-3 d-md-block d-none">
						{/* hidden below large screen */}
						<HomeSpaces />
					</div>
					<div className="col-lg-7 col-md-9 col-sm-12">
						<HomeFeed />
					</div>
					<div className="col-lg-3 d-lg-block d-none">
						<HomeFeedImprove />
					</div>
					{/* hidden below medium screen */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ ...state }) => {
	return {
		session:state.session
	};
};

export default connect(mapStateToProps)(Home);
