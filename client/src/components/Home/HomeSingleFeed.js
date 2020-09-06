import React from "react";
import image from "../../assets/images/signInBackground.png";
import { FeedActions, NewComment, Comments } from "../";

class HomeSingleFeed extends React.Component {
	render() {
		return (
			<div className="mb-3 feed-item">
				<div style={{ padding: 15 }}>
					<div className="feed-item-header mb-1">
						Answer &#8226; Recomended for you
					</div>
					<div className="d-flex flex-row justify-content-start align-items-center mb-2">
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
						<div className="d-flex flex-column justify-content-center align-items-start">
							<div className="feed-item-header-2">
								<span className="font-weight-bolder">
									Parikshit Singh
								</span>{" "}
								&#8226;{" "}
								<span className="text-secondary">
									Updated july 22
								</span>
							</div>
							<div className="feed-item-header-2 text-secondary">
								Studied at National Institute of Technology,
								Warangal (Graduated 2019)
							</div>
						</div>
					</div>
					<div>
						<h6 className="font-weight-bolder text-dark">
							What should everyone know about IITians?
						</h6>
					</div>
					<div className="feed-item-content mb-3">
						This is my id card when I joined IIT BOMBAY for my
						masters.
						<br />
						1.Students are normal just like another random college
						ie. Bunking, partying.
						<br /> 2.Very high IQ level in problem solving as well
						as in grasping any concept.
						<br /> 3.Some people pursue their hobbies as well ie.
						Acting, dancing, sports.
						<br /> 4.All the facilities at the campus really really
						good. Ie. Cricket ground, swimming pool, gym matching
						world class.
						<br /> 5.I would say people here are very consistent in
						their curriculum followed by hardwork and discipline.
						<br />
						6.Even before graduation,they are getting highly paid
						for their part time offers ie. Unacademy, startup.
						<br /> 7.People are really good at their hobbies, I
						would multi talented ie. Guitar,painting, gymnastics,
						dancing, blogging, youtubing.
						<br /> 8.They are 5–6 years ahead in their life compared
						to average engineering student.
						<br /> 9.Spending four to five years here in this campus
						you can wonders in your career.
						<br />
						10. Unfortunately I dropped because I got an offer from
						psu, I spent around 4months there and I can say that it
						was the best time of life.
						<br /> few people from college i take huge inspiration
						from
						<br /> 1.Kalpit Veerwal jee main-360/360 founder
						-acadboost youtuber
					</div>
					<div
						className="mb-2 text-secondary"
						style={{ fontSize: 12 }}
					>
						<span>233.3K views</span> &#8226;{" "}
						<span>View Upvoters</span> &#8226;{" "}
						<span>View Sharers</span>
					</div>
					<FeedActions />
				</div>
				<div>
					<NewComment />
					<Comments />
				</div>
			</div>
		);
	}
}
export default HomeSingleFeed;
