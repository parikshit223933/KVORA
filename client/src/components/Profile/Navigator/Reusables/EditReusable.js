import React from "react";

class EditReusable extends React.Component {
	render() {
		return (
			<div>
				<div>Comment added by John Gragson</div>
                <div className="mt-1 font-13">
                16 August 2020 (3 July 2020)
                </div>
				<div className="bordered p-3 my-2">
					That will be one funny-looking baby.
				</div>
                <div className="font-12 text-secondary">
                #1130224000 &bull; Thank &bull; Report &bull; July 3, 2020, 4:57:55 AM
                </div>
				<hr />
			</div>
		);
	}
}
export default EditReusable;
