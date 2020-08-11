import React from 'react';
import '../assets/css/App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {SignIn, Home} from './';

class App extends React.Component
{
    render()
    {
        return(
            <Router>
                <div className="App">
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/auth" component={SignIn}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default App;