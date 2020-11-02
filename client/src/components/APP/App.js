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
	Help,
	MessagesPopUp,
	Statistics,
	YourContentLanding,
	Bookmarks,
	Drafts,
} from "..";
import { getAuthtokenFromLocalStorage } from "../../helpers/utils";
import jwt_decode from 'jwt-decode';
import { refreshAuth } from "../../actions/auth";
import { connect } from "react-redux";

class App extends React.Component {
	componentDidMount()
	{
		let token=getAuthtokenFromLocalStorage();
		if(token)
		{
			const decoded_token=jwt_decode(token);
			const email=decoded_token.email;
			const userId=decoded_token.id;
			this.props.dispatch(refreshAuth(email, userId));
		}
	}
	render() {
		const isLoggedIn = true;
		return (
			<Router>
				<div className="App">
					{isLoggedIn && <Navbar />}
					<MessagesPopUp />
					{/* This pop up is invoke by messages/messagespopup */}
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
						<Route path="/help" component={Help} />
						<Route path="/stats" component={Statistics} />
						<Route
							exact
							path="/content"
							component={YourContentLanding}
						/>
						<Route exact path="/bookmarks" component={Bookmarks} />
						<Route exact path="/drafts" component={Drafts} />
					</Switch>
				</div>
			</Router>
		);
	}
}
const mapStateToProps=({...state})=>
{
	return{
		auth:state.auth
	}
}
export default connect(mapStateToProps)(App);
