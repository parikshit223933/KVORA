import React from 'react';
import '../../assets/css/App.scss';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Auth, Home, Navbar, Answer, Notification, Profile, AllSpaces, SingleSpace} from '..';

class App extends React.Component
{
    render()
    {
        const isLoggedIn=true;
        return(
            <Router>
                <div className="App">
				    {isLoggedIn&&<Navbar />}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/auth" component={Auth}/>
                        <Route exact path="/answer" component={Answer}/>
                        <Route exact path="/notification" component={Notification}/>
                        <Route path="/profile/:userId" component={Profile}/>
                        <Route exact path="/all-spaces" component={AllSpaces}/>
                        <Route exact path="/spaces/spaceId" component={SingleSpace}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;