import React from "react";
import image from "../../../../assets/images/signInBackground.png";

class ShareReusable extends React.Component {
	render() {
		return (
			<div>
				<div className="d-flex flex-row justify-content-start align-items-center">
					<div className="ml-0 mr-2">
						<img
							src={image}
							alt="user"
							style={{
								width: 40,
								height: 40,
								borderRadius: "100%"
							}}
						/>
					</div>
					<div>
						<div className="font-13">
							<span className="font-weight-bolder">
								Parikshit Singh
							</span>{" "}
							&bull;{" "}
							<span className="text-secondary">June 25</span>
						</div>
						<div className="text-black-50 font-13">
							Shared by John Gragson
						</div>
					</div>
				</div>
				<div className="my-2 text-dark">
					Contributors and submitters might want to be aware of this
					that came down recently from Quora, Inc. re: Space content.
					I don't interpret it as particularly prohibiting the content
					here, but do mind BNBR as I've previously noted.
				</div>
				<div className="bordered px-3 py-2">
					<div className="d-flex flex-row justify-content-start align-items-center">
						<div className="ml-0 mr-2">
							<img
								src={image}
								alt="user"
								style={{
									width: 30,
									height: 30,
									borderRadius: "100%"
								}}
							/>
						</div>
						<div className="font-weight-bolder font-13">
							Parikshit Singh
						</div>
						<div className="text-black-50 mx-1">&bull;</div>
						<div className="text-black-50 font-13">
							Answered April 10, 2019
						</div>
					</div>
					<div className="my-1">
						<b className="font-15 text-dark">
							What is Quora's content and image policy in Spaces?
						</b>
					</div>
					<div className="text-dark">
						Nine.
						<br />
						<br /> In the math book that someone copied this
						question from, perhaps the answer is 41, because if you
						suppose that 2c + 14 = 96, c is 41.
						<br />
						<br />
						However, in the real world, the answer is “not enough
						information.” Even setting aside Alexander Lee’s
						slightly macabre suggestion, the problem is not
						necessarily exhaustive. It’s quite easy to make
						additional assumptions that are perfectly consistent
						with the premise, and there is no way to rule those
						assumptions out.
						<br />
						<br />
						Suppose, for instance, there were, in addition to the
						children, eight adults who each ate three slices and
						seven more who ate two slices. Uncle Harry, the hog, ate
						four pieces. One pizza fell on the floor topping-side
						down. Johnny’s dad is the only one who will eat the
						mushroom pizza, so we sent two whole pizzas home with
						them. Six kids left right after the pizza, so they are
						not really “at the party” any more. And frankly, having
						41 children at a party is like insane.
						<br />
						<br />
						So I’m going with nine.
					</div>
				</div>
				<hr />
			</div>
		);
	}
}
export default ShareReusable;
