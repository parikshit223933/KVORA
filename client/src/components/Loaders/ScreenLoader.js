import React from "react";

class ScreenLoader extends React.Component {
	render() {
        const loaderSize=50;
        const unit='px'
		return (
			<div
				style={{
					height: "100vh",
					width: "100vw",
					position: "absolute",
					top: 0,
                    left: 0,
                    zIndex:100000,
                    backgroundColor:'#00000017'
				}}
				className="d-flex flex-row justify-content-center align-items-center"
			>
				<div className="spinner-border text-danger" style={{width:`${loaderSize}${unit}`, height:`${loaderSize}${unit}`}} role="status">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		);
	}
}
export default ScreenLoader;
