import React from "react";
import {ReusableCard} from '../';

class DiscoverSpaces extends React.Component {
	render() {
		return (
			<div className="discover-spaces">
				<div className="font-heavy font-16 mb-3">
					Spaces you might like
				</div>
				<div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                    <ReusableCard/>
                </div>
				<div className="view-more-button my-3">
					<button className="btn w-100 btn-light btn-sm text-secondary large-diff-button">
						View More <i className="fas fa-chevron-down"></i>
					</button>
				</div>
			</div>
		);
	}
}
export default DiscoverSpaces;
