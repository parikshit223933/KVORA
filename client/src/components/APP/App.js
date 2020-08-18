import React from 'react';
import '../../assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Auth, Home, Navbar, Answer} from '..';
import {Notification} from '../';

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
                        <Route path="/" exact component={Home}/>
                        <Route path="/auth" component={Auth}/>
                        <Route path="/answer" component={Answer}/>
                        <Route path="/notification" component={Notification}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;