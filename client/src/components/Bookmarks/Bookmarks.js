import React from "react";
import {HomeSpaces} from '../';

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
                    
					</div>
					{/* hidden below medium screen */}
				</div>
			</div>
		);
	}
}
export default Bookmarks;
