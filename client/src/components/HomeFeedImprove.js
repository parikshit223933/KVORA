import React from "react";

class HomeFeedImprove extends React.Component {
	render() {
		return (
			<div className="container-fluid px-0">
				<div className="improve-your-feed bg-white text-dark">
					<header className="px-3 py-2">
						<h6 className="m-0">Improve Your Feed</h6>
					</header>
                    <ul className="improve-feed-list">
                        <li>Follow 5 more spaces</li>
                        <hr/>
                        <li>Follow 15 more topics</li>
                        <hr/>
                        <li>Upvote 5 more good answers</li>
                        <hr/>
                        <li>Ask your first question</li>
                        <hr/>
                        <li>Fill out your profile</li>
                        <hr/>
                        <li>Answer a question</li>
                    </ul>
				</div>
			</div>
		);
	}
}
export default HomeFeedImprove;
