import React from 'react';
import '../assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Auth, Home, Navbar} from './';

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
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;