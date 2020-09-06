import React from "react";
import image from "../../assets/images/signInBackground.png";
import {ActionBar} from '../';

class Comment extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row justify-items-start align-items-start">
				<div className="mr-2">
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
				<div>
					<div className="font-13">
						<span>
							<b>Durga Sharma</b>
						</span>{" "}
						<span>&bull;</span> <span>June 19</span>
					</div>
					<div className="mb-2">
						This is a common trend.
						<br />
						<br />
						You make fun of someone or pull their leg, this leads to
						more people posting similar comments and then the whole
						post gets trolled.
						<br />
						<br />
						So, YouTubers, instagram influenceers, etc usually
						delete negative comments. This is why you got blocked.
						He wouldn't have the patience to delete the comments
						later so he eliminated you.
					</div>
                    <div>
                        <ActionBar/>
                    </div>
				</div>
			</div>
		);
	}
}
export default Comment;
