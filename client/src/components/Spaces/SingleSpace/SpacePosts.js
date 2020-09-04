import React from 'react';
import image from "../../../assets/images/signInBackground.png";

class SpacePosts extends React.Component
{
    render()
    {
        return(
            <div className="bg-white p-3 my-3">
						<div className="d-flex text-black-50 flex-row justify-content-start align-items-center">
							<div className="mr-2">
								<i className="fas fa-thumbtack"></i>
							</div>
							<div className="font-13">Pinned</div>
						</div>
						<div className="d-flex flex-row align-items-center justify-content-start">
							<div className="mr-1">
								<img
									src={image}
									alt="user"
									style={{
										width: 45,
										height: 45,
										borderRadius: "100%",
										border: "4px solid white"
									}}
								/>
							</div>
							<div className="d-flex font-13 flex-column justify-content-center align-items-start">
								<div>
									<b>Saharsh Tyagi</b>{" "}
									<span className="text-secondary">
										<i className="fas fa-shield-alt"></i>
									</span>{" "}
									<span className="text-secondary">
										&bull; February 22
									</span>
								</div>
								<div className="text-secondary">
									Hobbyist Programmer
								</div>
							</div>
						</div>
						<div className="space-intro py-2 px-3">
							<div className="d-flex mb-2 flex-row justify-content-start align-items-center">
								<div className="mr-1">
									<img
										src={image}
										alt="user"
										style={{
											width: 20,
											height: 20,
											borderRadius: "100%"
										}}
									/>
								</div>
								<div className="text-secondary font-12">
									<span>Tony Flurry</span> <span>&bull;</span>{" "}
									<span>Updated</span> <span>August 16</span>
								</div>
							</div>
							<div>
								<b>What is "lambda" in Python?</b>
							</div>
							<div>
								A lambda function is an anonymous function which
								can take any number of positional arguments and
								execute a single expression.
							</div>
						</div>
					</div>
        )
    }
}
export default SpacePosts;