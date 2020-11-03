import React from "react";
import "../../assets/css/App.scss";
import { BrowserRouter as Router, Switch } from "react-router-dom";
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
	PrivateRoute,
	RestrictedRoute
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
						<PrivateRoute exact path="/" component={Home} />
						<RestrictedRoute path="/auth" component={Auth} />
						<PrivateRoute exact path="/answer" component={Answer} />
						<PrivateRoute
							exact
							path="/notification"
							component={Notification}
						/>
						<PrivateRoute path="/profile/:userId" component={Profile} />
						<PrivateRoute exact path="/all-spaces" component={AllSpaces} />
						<PrivateRoute
							exact
							path="/spaces/:spaceId"
							component={SingleSpace}
						/>
						<PrivateRoute exact path="/about" component={About} />
						<PrivateRoute exact path="/careers" component={Careers} />
						<PrivateRoute exact path="/terms" component={Terms} />
						<PrivateRoute exact path="/privacy" component={Privacy} />
						<PrivateRoute
							exact
							path="/acceptable-use"
							component={AcceptableUse}
						/>
						<PrivateRoute exact path="/business" component={Business} />
						<PrivateRoute
							exact
							path="/your-ad-choices"
							component={YourAdChoices}
						/>
						<PrivateRoute path="/settings" component={Settings} />
						<PrivateRoute path="/help" component={Help} />
						<PrivateRoute path="/stats" component={Statistics} />
						<PrivateRoute
							exact
							path="/content"
							component={YourContentLanding}
						/>
						<PrivateRoute exact path="/bookmarks" component={Bookmarks} />
						<PrivateRoute exact path="/drafts" component={Drafts} />
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
