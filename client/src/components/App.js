import React from 'react';
import '../assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Navbar, SignIn, Home} from './';

class App extends React.Component
{
    render()
    {
        return(
            <Router>
                <div className="App">
                    <Navbar/>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/sign-in" exact component={SignIn}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;