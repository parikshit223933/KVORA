import React from 'react';

class SpaceDetails extends React.Component
{
    render()
    {
        return(
            <div className="bg-white py-2 px-3 font-15 space-intro mb-2">
					<div className="font-heavy">Details</div>
					<hr className="my-2" />
					<div className="font-13">
						Welcome to <b>Python learners</b>!<br />
						<br />
						This space is meant to be the ultimate learning resource
						who are learning Python or are willing to learn Python.
						<br />
						<br />
						Let’s share valuable content so that everyone can learn
						and grow together.
						<br />
						<br />
					</div>
				</div>
        )
    }
}
export default SpaceDetails;