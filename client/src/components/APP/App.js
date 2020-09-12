import React from "react";
import "../../assets/css/App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
	Auth,
	Home,
	Navbar,
	Answer,
	Notification,
	Profile,
	AllSpaces,
	SingleSpace,
	About,
	Careers,
	Terms,
	Privacy,
	AcceptableUse,
	Business,
	YourAdChoices,
	Settings,
} from "..";

class App extends React.Component {
	render() {
		const isLoggedIn = true;
		return (
			<Router>
				<div className="App">
					{isLoggedIn && <Navbar />}
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/auth" component={Auth} />
						<Route exact path="/answer" component={Answer} />
						<Route
							exact
							path="/notification"
							component={Notification}
						/>
						<Route path="/profile/:userId" component={Profile} />
						<Route exact path="/all-spaces" component={AllSpaces} />
						<Route
							exact
							path="/spaces/:spaceId"
							component={SingleSpace}
						/>
						<Route exact path="/about" component={About} />
						<Route exact path="/careers" component={Careers} />
						<Route exact path="/terms" component={Terms} />
						<Route exact path="/privacy" component={Privacy} />
						<Route
							exact
							path="/acceptable-use"
							component={AcceptableUse}
						/>
						<Route exact path="/business" component={Business} />
						<Route
							exact
							path="/your-ad-choices"
							component={YourAdChoices}
						/>
						<Route path="/settings" component={Settings} />
					</Switch>
				</div>
			</Router>
		);
	}
}
export default App;
