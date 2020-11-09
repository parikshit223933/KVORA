import React from "react";
import { connect } from "react-redux";
import { ComponentLoader, DraftsReusable } from "../";
import { fetchDrafts } from "../../actions/session";
import { getAuthtokenFromLocalStorage } from "../../helpers/utils";

class DraftsMid extends React.Component {
	componentDidMount() {
		this.props.dispatch(fetchDrafts());
	}
	render() {
        console.log(getAuthtokenFromLocalStorage())
		if (this.props.session.inProgress) {
			return <ComponentLoader />;
		}
		return (
			<div>
				<div className="d-flex flex-row justify-content-between align-items-center">
					<div className="font-heavy">1 Draft</div>
					<div className="text-secondary">Delete All Drafts</div>
				</div>
				<hr className="my-2" />
				<div>
					{this.props.session.drafts === 0 ? (
						<h1>No Data Available</h1>
					) : (
						this.props.session.drafts.map((draft, index) => {
							return <DraftsReusable key={index} draft={draft} />;
						})
					)}
				</div>
			</div>
		);
	}
}
const mapStateToProps = ({ ...state }) => {
	return {
		session: state.session,
	};
};
export default connect(mapStateToProps)(DraftsMid);
