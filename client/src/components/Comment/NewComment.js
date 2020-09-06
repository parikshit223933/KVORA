import React from "react";
import image from "../../assets/images/signInBackground.png";

class NewComment extends React.Component {
	render() {
		return (
			<div
				style={{
					backgroundColor: "#f7f7f8",
					borderTop: "1px solid rgb(219, 219, 219)",
					borderBottom: "1px solid rgb(219, 219, 219)"
				}}
				className="px-3 py-2 d-flex flex-row justify-content-start align-items-center mb-3"
			>
				<div style={{ flexGrow: 1 }}>
					<div>
						<img
							src={image}
							alt="user"
							style={{
								width: 35,
								height: 35,
								borderRadius: "100%"
							}}
						/>
					</div>
				</div>
				<div style={{ flexGrow: 100 }} className="mx-2">
					<input
						type="text"
						className="form-control w-100 curved-button"
						placeholder="Add a comment..."
					/>
				</div>
				<div style={{ flexGrow: 1 }}>
					<button
						type="button"
						className="btn btn-sm w-100 btn-light font-heavy text-white curved-button"
						style={{ backgroundColor: "#94b2ff" }}
					>
						Add Comment
					</button>
				</div>
			</div>
		);
	}
}
export default NewComment;
