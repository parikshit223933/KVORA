import React from 'react';
import image from "../../../assets/images/signInBackground.png";

class SpaceHeader extends React.Component
{
    render()
    {
        return(
            <React.Fragment>
                <div
    						style={{
    							backgroundImage: "url('" + image + "')",
    							height: 170,
    							width: "100%",
    							backgroundSize: "cover"
    						}}
    					></div>
    					<div>
    						<div className="ml-2" style={{ marginTop: -50 }}>
    							<img
    								src={image}
    								alt="user"
    								style={{
    									width: 100,
    									height: 100,
    									borderRadius: "100%",
    									border: "4px solid white"
    								}}
    							/>
    						</div>
    					</div>
    					<div className="pl-3">
    						<h5 className="mb-0">
    							<b>Python Learners</b>
    						</h5>
    						<p className="text-secondary mb-2">q/pythonlearners</p>
    						<p className="font-13">
    							A space for beginners to get started learning Python
    						</p>
    					</div>
    					<div className="d-flex flex-row justify-content-between align-items-center px-2">
    						<div className="d-flex flex-row justify-content-start align-items-center">
    							<button
    								type="button"
    								className="btn btn-sm curved-button blue-tint"
    							>
    								<span>
    									<i className="fas fa-clipboard-check"></i>
    								</span>{" "}
    								<b>Following</b> &bull; <span>56.5K</span>
    							</button>
    							<button
    								type="button"
    								className="btn btn-sm curved-button blue-tint mx-2"
    							>
    								<span>
    									<i className="fas fa-bell"></i>
    								</span>{" "}
    								<b>Highlights</b>
    							</button>
    						</div>
    						<div className="d-flex flex-row justify-content-center align-items-center">
    							<button
    								type="button"
    								className="btn btn-sm blue-tint mx-1"
    								style={{ borderRadius: "100%" }}
    							>
    								<i className="fas fa-user-plus"></i>
    							</button>
    							<button
    								type="button"
    								className="btn btn-sm blue-tint mx-1"
    								style={{ borderRadius: "100%" }}
    							>
    								<i className="fas fa-share"></i>
    							</button>
    							<button
    								type="button"
    								className="btn btn-sm blue-tint mx-1"
    								style={{ borderRadius: "100%" }}
    							>
    								<i className="fas fa-ellipsis-h"></i>
    							</button>
    						</div>
    					</div>
    					<hr className="mt-2 mb-0" />
    					<div className="d-flex flex-row px-3 font-13">
    						<div className="py-3 px-2 font-heavy">Main</div>
    						<div className="py-3 px-2 font-heavy">Questions</div>
    						<div className="py-3 px-2 font-heavy">People</div>
    					</div>
    					<hr className="my-0" />
            </React.Fragment>
        );
    }
}
export default SpaceHeader;