import React from "react";
import image from "../../assets/images/about.png";

class About extends React.Component {
	render() {
		return (
			<div className="container bg-white" style={{ paddingTop: 100 }}>
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center">
						<h2 className="my-5">
							<b>Why Kvora Exists</b>
						</h2>
						<p className="text-justify font-18">
							Kvora’s mission is to share and grow the world’s
							knowledge. A vast amount of the knowledge that would
							be valuable to many people is currently only
							available to a few — either locked in people’s
							heads, or only accessible to select groups. We want
							to connect the people who have knowledge to the
							people who need it, to bring together people with
							different perspectives so they can understand each
							other better, and to empower everyone to share their
							knowledge for the benefit of the rest of the world.
						</p>
					</div>
				</div>
				<div className="row my-4">
					<div className="col-md-10 offset-md-1 col-sm-12">
						<img src={image} style={{ width: "100%" }} alt="" />
					</div>
				</div>
				<div className="row">
					<div className="col-md-6 offset-md-3 text-center mb-5">
						<h2 className="my-5">
							<b>Gather Around a Question</b>
						</h2>
						<p className="text-justify font-18">
							The heart of Kvora is questions — questions that
							affect the world, questions that explain recent
							world events, questions that guide important life
							decisions, and questions that provide insights into
							why other people think differently. Kvora is a place
							where you can ask questions you care about and get
							answers that are amazing.
						</p>
						<p className="text-justify font-18">
							Kvora has only one version of each question. It
							doesn’t have a left wing version, a right wing
							version, a western version, and an eastern version.
							Kvora brings together people from different worlds
							to answer the same question, in the same place — and
							to learn from each other. We want Kvora to be the
							place to voice your opinion because Kvora is where
							the debate is happening. We want the Kvora answer to
							be the definitive answer for everybody forever.
						</p>
						<h2 className="my-5">
							<b>Understand The World and The People In It</b>
						</h2>
						<p className="text-justify font-18">
							Kvora has content you will feel good about having
							read. Kvora helps you understand why the world works
							the way it does, why people behave the way they do,
							and what we can all do to make the world better.
							Kvora provides a personalized feed of insightful
							answers to questions you hadn’t realized you should
							ask.
						</p>
						<p className="text-justify font-18">
							Kvora’s answers come from people who really
							understand the issues and have first-hand knowledge.
							Kvora is the place to read Barack Obama on the Iran
							deal, prisoners on life in prison, scientists on
							global warming, police officers on how to deter
							burglars, and TV producers on how their shows are
							made. Kvora is the place to read inspiring people
							such as Gloria Steinem, Stephen Fry, Hillary
							Clinton, Glenn Beck, Sheryl Sandberg, Vinod Khosla,
							and Gillian Anderson directly answering the
							questions people most wanted them to answer. Kvora
							is where you can read important insights that have
							never been shared anywhere else, from people you
							could never reach any other way.
						</p>
					</div>
                    <hr/>
				</div>
			</div>
		);
	}
}

export default About;
